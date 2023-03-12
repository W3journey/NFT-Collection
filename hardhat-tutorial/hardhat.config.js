require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://ethereum-sepolia.blockpi.network/v1/rpc/public" ||
  "https://rpc.sepolia.org" ||
  "https://sepolia.infura.io/v3/";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.1",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};
