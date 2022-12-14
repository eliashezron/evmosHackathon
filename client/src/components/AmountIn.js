import React, { useState, useRef } from "react"
import { chevronDown } from "../assets"
import { useOnClickOutside } from "../utils"
import styles from "../styles"
import tokens from "../utils/tokenname.json"
import { handlePriceFeed } from "../utils/pricefeed"

const AmountIn = ({ value, onChange, onChain, inUsd, onToken, taddress }) => {
  const [showList, setShowList] = useState(false)
  const [activeToken, setActiveToken] = useState("Select")
  const [activeChainId, setactiveChainId] = useState("")

  const ref = useRef()
  useOnClickOutside(ref, () => setShowList(false))

  const chainid = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" })
    const chainid = parseInt(chainId, 16)
    setactiveChainId(chainid)
    setShowList(!showList)
  }

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder='0.0'
        type='number'
        value={value}
        disabled={false}
        onChange={(e) =>
          typeof onChange === "function" && onChange(e.target.value)
        }
        className={styles.amountInput}
      />

      <div className='relative' onClick={async () => await chainid()}>
        <button className={styles.currencyButton}>
          {activeToken}
          <img
            src={chevronDown}
            alt='cheveron-down'
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {showList && (
          <ul ref={ref} className={styles.currencyList}>
            {tokens[activeChainId].map(
              ({ tokenName, pricefeed, add }, index) => (
                <li
                  key={index}
                  className={`${styles.currencyListItem} ${
                    activeToken === tokenName ? "bg-site-dim2" : ""
                  } cursor-pointer`}
                  onClick={async () => {
                    setActiveToken(tokenName)
                    onToken(tokenName)
                    taddress(add)
                    onChain(activeChainId)
                    if (typeof onSelect === "function");
                    if (
                      pricefeed === "0x9ae96129ed8FE0C707D6eeBa7b90bB1e139e543e"
                    ) {
                      const x = await handlePriceFeed(pricefeed)
                      const y = await handlePriceFeed(
                        "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
                      )
                      const z = x * 10 ** -10 * y
                      inUsd(z)
                      console.log(z)
                    }
                    if (
                      pricefeed === "0x2DE7E4a9488488e0058B95854CC2f7955B35dC9b"
                    ) {
                      const x = await handlePriceFeed(pricefeed)
                      const y = await handlePriceFeed(
                        "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
                      )
                      const z = x * 10 ** -10 * y
                      inUsd(z)
                      console.log(z)
                    } else {
                      const z = await handlePriceFeed(pricefeed)
                      inUsd(z)
                    }

                    setShowList(false)
                  }}
                >
                  {tokenName}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AmountIn
