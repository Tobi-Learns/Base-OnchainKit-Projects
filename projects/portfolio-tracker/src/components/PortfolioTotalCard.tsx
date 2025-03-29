import React from "react";

interface PortfolioTotalCardProps {
  totalValue: number;
}

const PortfolioTotalCard: React.FC<PortfolioTotalCardProps> = ({
  totalValue,
}) => {
  return (
    <div className="portfolio-total-card">
      <h3>Total Portfolio Value</h3>
      <p>
        ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </p>
    </div>
  );
};

export default PortfolioTotalCard;
