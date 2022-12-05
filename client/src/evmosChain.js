import { Chain } from "@usedapp/core"

const getAddressLink = (explorerUrl: string) => (address: string) =>
  `${explorerUrl}/address/${address}`

const getTransactionLink = (explorerUrl: string) => (txnId: string) =>
  `${explorerUrl}/tx/${txnId}`

const evmosExplorerUrl = "https://evm.evmos.org"

export const Evmos: Chain = {
  chainId: 9001,
  chainName: "Celo",
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0xA7989A55bA5eD1b2906488eDB237c366a921dB65",
  rpcUrl: "https://eth.bd.evmos.org:8545",
  nativeCurrency: {
    name: "EVMOS",
    symbol: "EVMOS",
    decimals: 18,
  },
  blockExplorerUrl: evmosExplorerUrl,
  getExplorerAddressLink: getAddressLink(evmosExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(evmosExplorerUrl),
}

export default Evmos
