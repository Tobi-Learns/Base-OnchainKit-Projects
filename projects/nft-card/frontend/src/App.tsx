import "@coinbase/onchainkit/styles.css";
import "./App.css";
import NavBar from "./components/NavBar";
// import Dashboard from "./components/Dashboard";
// import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import NftTable from "./components/NftTable";
// import TokenTable from "./components/TokenTable";

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "Portfolio Tracker",
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(import.meta.env.BASE_SEPOLIA_API_URL),
  },
});

function App() {
  return (
    <div className="body">
      <WagmiProvider config={wagmiConfig}>
        <div>
          <NavBar />
        </div>

        <div className="container">
          <NftTable />
        </div>
      </WagmiProvider>
    </div>
  );
}

export default App;
