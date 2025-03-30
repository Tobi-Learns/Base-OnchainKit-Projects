import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getPortfolios } from "@coinbase/onchainkit/api";
import PortfolioTotalCard from "./PortfolioTotalCard";

interface Asset {
  name: string;
  symbol: string;
  amount: number;
  price: number;
  total: number;
  logo: string;
  percentage: number;
}

const Dashboard = () => {
  const { address } = useAccount();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!address) return;

      try {
        const response = await getPortfolios({ addresses: [address] });

        if ("error" in response) {
          console.error("API error:", response.error);
          return;
        }

        const tokens = response.portfolios?.[0]?.tokenBalances || [];

        const intermediateAssets = tokens
          .filter((token) => token.cryptoBalance && token.decimals != null)
          .map((token) => {
            const amount =
              Number(token.cryptoBalance) / Math.pow(10, token.decimals);
            const price = amount === 0 ? 0 : Number(token.fiatBalance) / amount;

            return {
              name: token.name,
              symbol: token.symbol,
              amount,
              price,
              total: Number(token.fiatBalance),
              logo: token.image || "/default.png",
              percentage: 0,
            };
          });

        const total = intermediateAssets.reduce((sum, a) => sum + a.total, 0);

        const formattedAssets = intermediateAssets.map((a) => ({
          ...a,
          percentage: total > 0 ? (a.total / total) * 100 : 0,
        }));

        setTotalValue(total);
        setAssets(formattedAssets);
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchPortfolio();
  }, [address]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <PortfolioTotalCard totalValue={totalValue} />

      <div className="asset-table">
        <div className="table-header">
          <span className="header-name">Name</span>
          <span>Amount</span>
          <span>Price</span>
          <span>Total</span>
          <span>Percentage</span>
        </div>

        {assets.map((asset, index) => (
          <div className="table-row" key={index}>
            <div className="asset-info">
              <img src={asset.logo} alt={asset.name} className="asset-logo" />
              <span className="asset-name">
                <strong>{asset.name}</strong> • {asset.symbol}
              </span>
            </div>
            <span>{asset.amount.toFixed(5)}</span>
            <span>
              $
              {asset.price.toLocaleString(undefined, {
                maximumFractionDigits: 4,
              })}
            </span>
            <span>${asset.total.toFixed(2)}</span>
            <span className="percentage">{asset.percentage.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
