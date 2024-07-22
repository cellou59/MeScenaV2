# MeScena - Web3 Video Streaming Platform

link : https://me-scena-45whwle95-cellou59s-projects.vercel.app/

## Introduction

**MeScena** is a Web3 video streaming platform that transforms interactions between content creators and their communities using blockchain technology. Inspired by the ancient Agora, a place of gathering and exchange, MeScena creates a space where transparency, interactivity, and revenue redistribution are at the heart of the user experience.

## Vision and Mission

### Vision
To make MeScena a trusted platform for content creators and their audiences by establishing new standards of engagement and remuneration in the world of video streaming.

### Mission
To redefine engagement and remuneration in the video streaming universe by offering a transparent, fair, and interactive platform using Solana blockchain technology.

## Problem Statements and Solutions

1. **Opacity of Remuneration Systems**
   - **Problem**: Content creators do not clearly know how their revenues are calculated and may receive an unfair share of the generated income.
   - **Solution**: Use the Solana blockchain to ensure transparent transactions and clear revenue distributions directly visible to creators and viewers.

2. **Lack of Meaningful Interactions**
   - **Problem**: Interactions on traditional video streaming platforms are often limited to simple likes and comments without real impact or added value.
   - **Solution**: Integrate like and voting systems based on blockchain transactions, allowing viewers to financially support creators and actively participate in content direction.

3. **Unequal Rewards for Viewer Engagement**
   - **Problem**: Engaged viewers are not sufficiently rewarded for their contributions (comments, likes, subscriptions).
   - **Solution**: Implement airdrop reward systems for relevant comments and significant engagements, as well as tiered rewards for likes.

4. **Limited Revenue for Content Creators**
   - **Problem**: Content creators heavily rely on advertising revenue and lack diversified means to monetize their audience.
   - **Solution**: Offer paid subscriptions, exclusive content, and share advertising revenue with subscribers, thus increasing revenue sources.

5. **Centralized Governance**
   - **Problem**: Platform features and rules are often decided without consulting users and creators.
   - **Solution**: Implement a DAO (Decentralized Autonomous Organization) allowing creators and viewers to propose and vote on new features and rules, ensuring democratic governance.

## Key Features

1. **Likes and Transactions**
   - **Viewers**: Liking a video triggers a transaction via the Solana blockchain, unlocking additional features such as voting for creator proposals and tiered reward systems.
   - **Creators**: Receive direct financial support from your fans and reward them with exclusive content or special perks.

2. **Voting System**
   - **Viewers**: Participate in polls and influence future content from your favorite creators.
   - **Creators**: Create proposals and gather community feedback to adjust your content.

3. **Comments and Airdrops**
   - **Viewers**: Post relevant or humorous comments and receive airdrops as rewards.
   - **Creators**: Reward your fans' engagement with airdrops and highlight the best comments.

4. **Subscriptions**
   - **Viewers**: Subscribe to your favorite creators for exclusive content and participate in channel decisions.
   - **Creators**: Increase your revenue through subscriptions and share a portion of advertising revenue with your subscribers.

5. **DAO Governance**
   - **Viewers and Creators**: Participate in platform decisions, propose ideas, and vote on new features and rules via a DAO, ensuring transparent and community-driven governance.

6. **Metrics**
   - **Viewers and Creators**: Access detailed metrics on transactions, interactions, revenues, and audience trends.

## Technologies Used

- **Blockchain**: Solana.
- **Programming Languages**: Rust, JavaScript.
- **Frameworks**: Anchor, React.js, TypeScript.

## Roles

1. **Host**
   - Ensures transaction transparency and platform management.
   - Provides detailed metrics for creators and viewers.

2. **Content Creator**
   - Produce content, engage and reward your community, and benefit from detailed metrics to adjust your strategy.

3. **Viewer**
   - Support your favorite creators, actively participate in the community, and receive rewards for your engagement.

Sure! Here is the section on how to install and set up the project on a local machine:

### Installation and Setup

#### Prerequisites

- **Rust**: Ensure you have Rust installed. If not, you can install it using the following command:
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- **Solana CLI**: Install the Solana CLI by running:
  ```sh
  sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
  ```

- **Anchor CLI**: Install the Anchor CLI by running:
  ```sh
  cargo install --git https://github.com/project-serum/anchor --tag v0.20.1 anchor-cli --locked
  ```

#### Clone the Repository

Clone the project repository from GitHub:
```sh
git clone https://github.com/your-username/mescena.git
cd mescena
```

#### Build the Project

Navigate to the program directory and build the smart contract:
```sh
cd program
anchor build
```

#### Deploy the Program

Deploy the program to the Solana network:
```sh
anchor deploy
```

#### Test the Program

Run the test suite to ensure everything is working correctly:
```sh
anchor test
```

#### Set Up the Front-End

Navigate to the front-end directory, install dependencies, and start the development server:
```sh
cd front
npm install
npm start
```

#### Additional Configuration

Ensure you configure your local environment to connect to the correct Solana cluster (e.g., Devnet) by setting the appropriate environment variables in your `.env` file.

```sh
# Set Solana cluster to Devnet
solana config set --url https://api.devnet.solana.com
```

Replace the placeholder repository URL with your actual GitHub repository URL, and make sure all paths are correct according to your project's structure.
