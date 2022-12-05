const networks = {
  5: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Goerli",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/"],
    blockExplorerUrls: ["https://goerli.etherscan.io"],
  },
  137: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  80001: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  9001: {
    chainId: `0x${Number(9001).toString(16)}`,
    chainName: "Evmos",
    nativeCurrency: {
      name: "EVMOS",
      symbol: "EVMOS",
      decimals: 18,
    },
    rpcUrls: ["https://eth.bd.evmos.org:8545"],
    blockExplorerUrls: ["https://evm.evmos.org"],
  },
  97: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "tBNB",
      symbol: "tBNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-2-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  56: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  44787: {
    chainId: `0x${Number(44787).toString(16)}`,
    chainName: "Celo Alfajores Testnet",
    nativeCurrency: {
      name: "CELO",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
    blockExplorerUrls: ["https://alfajores.celoscan.io"],
  },
  42220: {
    chainId: `0x${Number(42220).toString(16)}`,
    chainName: "Celo",
    nativeCurrency: {
      name: "CELO",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: ["https://celo.quickestnode.com"],
    blockExplorerUrls: ["https://celoscan.io"],
  },
  250: {
    chainId: `0x${Number(250).toString(16)}`,
    chainName: "Fantom Opera",
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ftm.tools"],
    blockExplorerUrls: ["https://ftmscan.com"],
  },
  4002: {
    chainId: `0x${Number(4002).toString(16)}`,
    chainName: "Fantom Testnet",
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.testnet.fantom.network"],
    blockExplorerUrls: ["https://testnet.ftmscan.com"],
  },
}

const changeNetwork = async (networkName) => {
  if (networkName === "5") {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(networkName).toString(16)}` }],
    })
    console.log("hello")
  } else {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    })
  }
}

export const handleNetworkSwitch = async (networkName) => {
  if (networkName === "1") {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(networkName).toString(16)}` }],
    })
    console.log("helloeth")
  } else {
    await changeNetwork(networkName)
  }
}
