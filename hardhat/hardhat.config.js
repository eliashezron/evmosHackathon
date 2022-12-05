require("@nomicfoundation/hardhat-chai-matchers")
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config({ path: ".env" })

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",

  networks: {
    local: {
      url: "http://localhost:8545",
    },
    Evmos: {
      url: `https://eth.bd.evmos.org:8545`,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 5,
      gasPrice: 21000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MUMBAI}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },

  mocha: {
    timeout: 80000,
  },
}
