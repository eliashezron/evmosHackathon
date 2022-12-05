const { addressConverter } = require("evmosjs")
const { writeFileSync } = require("fs")
require("dotenv").config()
async function main() {
  const { PRIVATE_KEY: signer } = process.env
  const ethAddress = new ethers.Wallet(signer).address
  const evmosAddress = addressConverter.ethToEvmos(ethAddress)
  console.log("this is the ethAddress", ethAddress)
  console.log("this is the evmosAddress", evmosAddress)
  writeFileSync(
    "addresses.json",
    JSON.stringify(
      {
        Bech32: evmosAddress,
        Hex: ethAddress,
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
