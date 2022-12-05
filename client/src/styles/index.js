const styles = {
  // App.js
  container: "flex justify-center min-h-screen sm:px-16 px-6 bg-site-black",
  innerContainer:
    "flex justify-between items-center flex-col max-w-[1280px] w-full",
  header: "flex flex-row justify-between items-center w-full sm:py-10 py-6",
  subheader: "flex items-center justify-center py-3 bg-site-dim2 w-full  font-poppins font-bold text-white rounded-xl",
  Rheader: "flex flex-row justify-end  w-full",
  sideBySide: "flex flex-row justify-end",
  nftGrid: "ml-8 grid grid-cols-2 gap-5",
  exchangeContainer: "flex-1 flex justify-start items-center flex-col w-full",
  headTitle: "text-white font-poppins font-black text-5xl tracking-wide",
  subTitle: "text-dim-white font-poppins font-medium mt-3 text-base",
  exchangeBoxWrapper: "mt-10 mb-2 w-full flex justify-center",
  exchangeBox:
    "relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl",
  exchange:
    "w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10",

  // AmountIn & AmountOut
  amountContainer:
    "flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[20px]",
  amountInput:
    "w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white",
  currencyButton:
    "flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white",
  currencyList:
    "absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden",
  currencyListItem:
    "font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer",

  // Exchange
  actionButton:
    "border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px]",
  message: "font-poppins font-lg text-white font-bold mt-7",

  // WalletButton
  walletButton:
    "ml-3 mr-3 bg-sky-700 border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-sky-400 transition-all",

  // loader
  loader: "flex justify-center items-center flex-col w-full min-h-full",
  loaderImg: "w-56 h-56 object-contain",
  loaderText:
    "font-poppins font-normal text-dim-white text-lg text-center mt-10",
  NftImg: " rounded-2xl",
  // balance
  balance: "w-full text-left mt-2 ml-2",
  left: "font-poppins font-normal text-green-600 text-right mr-2 mt-2 w-full ",
  right: "font-poppins font-normal text-red-600 text-right mr-2 mt-2 w-full ",
  balanceText: "font-poppins font-normal text-dim-white",
  balanceBold: "font-semibold text-white",
}

export default styles
