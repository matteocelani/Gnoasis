# Gnoasis 🏝️
Gnoasis is a progressive mobile web app deeply integrated with the Gnosis Pay and Safe global ecosystem.

Our goal is to create an intuitive and user-friendly gateway for both Web2 and Web3 users to onboard into the Gnosis ecosystem and the broader DeFi space. Gnoasis takes inspiration from popular banking apps like Revolut, replicating and extending functionality to provide a frictionless DeFi experience.

# Features 🚀   
### Onboarding Made Easy
- Web3 Users: Login by connecting any wallet via Web3Auth.
- Web2 Users: Onboard through Web3Auth social login options (e.g., Google).
- Easily create a Gnosis Pay account with gas sponsorship.
- Onramp fiat to crypto directly using a credit card, with funds deposited into the user's wallet.

### Wallet Management
- View wallet composition, including native tokens and ERC20 balances.
- Transfer and deposit tokens.
- Swap tokens with access to transaction and swap history.

### Familiar & Intuitive Interface
Enjoy a user experience modeled after traditional banking apps—simple, intuitive, and made-user-friendly.

### Future Features
Due to time constraints or technical challenges, some features are not yet fully implemented:
- Customizable Security Settings: Configure spending limits and other settings related to Gnosis Pay.
- Wallet Analytics: Detailed wallet statistics and insights.
- Earn/Invest Section: Direct access to DeFi protocols like staking, lending/borrowing, and liquidity providing.
- Payments Section: Integration with Gnosis Card features (e.g., card transactions, contacts, friends, cashback).

# Tech Stack 💻
- Frontend: Next.js Progressive Web App using Wagmi and Viem for wallet integration and blockchain interactions.
- Authentication & Onramp: Web3Auth for wallet connection, social login, and fiat-to-crypto conversion.
- [uramp](https://uramp.gnosis.io/) for onramp and offramp for all users
- Gas Sponsorship: Permissionless.js for enabling gas-free transactions.
- Blockchain: Gnosis Chain as the primary blockchain to support Gnosis Pay users, with the potential for multichain deployment on any EVM-compatible chain.
- Swaps & Bridges: Cow DAO for token swaps and bridging on Gnosis Chain.

With Gnoasis, we aim to close the gap between traditional finance and decentralized finance, delivering a platform that is both accessible and powerful.