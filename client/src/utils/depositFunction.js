import createInstance from "../hooks/useContract"
import addresses from "../contracts/addresses.json"
import cashOutAbi from "../contracts/cashOut.json"
import tokenAbi from "../contracts/token.json"
import axios from "axios"
import { toast } from "react-toastify"
export async function approve(amount, provider, networkHandler, cashOutToken) {
  const signer = provider.getSigner()
  const token = createInstance(
    addresses[networkHandler].Token[cashOutToken],
    tokenAbi,
    signer
  )
  console.log(addresses[networkHandler].Token[cashOutToken])
  const tx = await token.approve(addresses[networkHandler].CashOut, amount)
  tx.wait(3)
  return tx
}

async function sendTx(
  networkHandler,
  provider,
  tokenAddress,
  amount,
  phoneNumber,
  intocurrency,
  currency
) {
  const cashOut = createInstance(
    addresses[networkHandler].CashOut,
    cashOutAbi,
    provider
  )
  const params = {
    phoneNumber, //256779177900
    intocurrency, // input the converted amount here
    currency, // depends on the country currency
  }
  const signer = provider.getSigner()
  const tx = await cashOut.connect(signer).depositToken(tokenAddress, amount)
  await tx.wait(10)
  const config = { headers: { "Content-Type": "application/json" } }
  const { data } = await axios.post(
    "http://localhost:5000/api/cashout",
    params,
    config
  )
  console.log(data)
  if (data.status === "NEW") toast.info("Fiat transaction Initiated")
  return tx
}
export async function depositToken(
  amount,
  phoneNumber,
  provider,
  intocurrency,
  currency,
  networkHandler,
  cashOutToken
) {
  if (!amount) throw new Error(`amount cannot be empty`)
  if (!phoneNumber) throw new Error(`phoneNumber cannot be empty`)
  if (!window.ethereum) throw new Error(`User wallet not found`)
  await window.ethereum.enable()
  const userNetwork = await provider.getNetwork()
  console.log(userNetwork.chainId)

  return sendTx(
    networkHandler,
    provider,
    addresses[networkHandler].Token[cashOutToken],
    amount,
    phoneNumber,
    intocurrency,
    currency
  )
}
