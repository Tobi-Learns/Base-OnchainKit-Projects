# 📊 Portfolio Tracker

Track your wallet's token holdings and visualize your total portfolio value using onchain data — powered by [Base's OnchainKit](https://onchainkit.xyz).

This project serves as a real-world example of how to use Viem and OnchainKit to fetch onchain balances, display them in a modern UI, and build wallet-aware frontend experiences.

## 🧰 Tech Stack

- **Vite + React** – Fast and modern frontend development
- **Viem** – Wallet connection and contract interaction
- **Wagmi** – React hooks for Ethereum
- **OnchainKit API** – Connect to wallet and Retrieve wallet portfolio data
- **Tailwind CSS / CSS Modules** – Styling and layout

## 🚀 Features

- 🔗 **Wallet Detection:** Connect via MetaMask, Coinbase Wallet, or any Viem-compatible provider
- 📈 **Real-Time Portfolio:** Pulls live token balances and fiat equivalents (Static)
- 💰 **Total Portfolio Value Card:** Summarizes wallet's USD value
- 📄 **Clean Asset Table:** Displays token logo, amount, price, total, and portfolio share
- 📊 **Percentage Breakdown:** Shows how much each token contributes to your wallet

## 📦 Getting Started

```bash
git clone https://github.com/your-org/onchainkit-projects.git
cd onchainkit-projects/projects/portfolio-tracker
pnpm install
pnpm run dev
```
