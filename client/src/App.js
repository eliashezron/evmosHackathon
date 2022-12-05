import React from "react"
import { useEthers } from "@usedapp/core"
import { ToastContainer } from "react-toastify"
import styles from "./styles"
import { Logo } from "./assets"
import { Exchange, Loader, WalletButton, Networks, History } from "./components"

const App = () => {
  const { account } = useEthers()

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div class={styles.subheader}>
          <p class=''>
            {" "}
            ⚡ CONVIENTLY SWAP CRYPTO FOR FIAT⚡⚡ POWERED BY EVMOS⚡{" "}
          </p>
        </div>
        <header className={styles.header}>
          <img
            src={Logo}
            alt='CashOut-logo'
            className='w-50 h-20 object-contain'
          />
          {account ? (
            <>
              <div className={styles.Rheader}>
                <Networks />
                <WalletButton />
                <History />
              </div>
            </>
          ) : (
            <WalletButton />
          )}
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>CashOut 2.0</h1>
          <p className={styles.subTitle}>Sell your Cryptos in seconds</p>
        </div>
        <div className={styles.sideBySide}>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className='blue_gradient' />
              <div className={styles.exchange}>
                {account ? (
                  <>
                    <Exchange />
                    <ToastContainer hideProgressBar={true} />
                  </>
                ) : (
                  <Loader title='Please connect your wallet' />
                )}
              </div>
              <div className='blue_gradient' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
