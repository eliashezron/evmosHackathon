import { Evmos } from "./evmosChain"
import { Mumbai, Goerli, BSCTestnet } from "@usedapp/core"

export const DAPP_CONFIG = {
  readOnlyChainId: Evmos.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: `https://polygon-mumbai.g.alchemy.com/v2/QWBjR1zQlh9_j3wnnDHctBnHmn-Obao3`,
    [Goerli.chainId]: `https://goerli.infura.io/v3/379d2d85420a445cb0f197f6c7b01977`,
    [BSCTestnet.chainId]: `https://data-seed-prebsc-2-s1.binance.org:8545/`,
    [Evmos.chainId]: "https://eth.bd.evmos.org:8545",
  },
  noMetamaskDeactivate: true,
}
