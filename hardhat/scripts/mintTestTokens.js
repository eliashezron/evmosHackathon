const { ethers } = require("hardhat")
const { writeFileSync, readFileSync } = require("fs")
require("dotenv").config()

function getInstance(name) {
  const address = JSON.parse(readFileSync("cashOutAddresses.json"))[name]
  if (!address) throw new Error(`Contract ${name} not found in deploy.json`)
  return ethers
    .getContractFactory("CashOutContract")
    .then((f) => f.attach(address))
}

async function main() {
  const cashout = await getInstance("CashOutContractGoerli")
  const Token = await ethers.getContractFactory("Token")
  const usdt = await Token.deploy("USDT", "USDT").then((f) => f.deployed())
  const usdc = await Token.deploy("USDC", "USDC").then((f) => f.deployed())

  const amount = ethers.utils.parseEther("1000")

  const { PRIVATE_KEY: signer } = process.env
  const ethAddress = new ethers.Wallet(signer).address

  await usdt.mint(ethAddress, amount)
  await usdc.mint(ethAddress, amount)

  await cashout.addAllowedToken(usdt.address)
  await cashout.addAllowedToken(usdc.address)
  writeFileSync(
    "ethToken.json",
    JSON.stringify(
      {
        USDT: usdt.address,
        USDC: usdc.address,
      },
      null,
      2
    )
  )
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
