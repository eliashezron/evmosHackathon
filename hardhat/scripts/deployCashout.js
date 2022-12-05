const { ethers } = require("hardhat")
const { writeFileSync } = require("fs")
require("dotenv").config()

async function main() {
  const CashOut = await ethers.getContractFactory("CashOutContract")
  const cashout = await CashOut.deploy().then((f) => f.deployed())
  writeFileSync(
    "cashOutAddresses.json",
    JSON.stringify(
      {
        CashOutContract: cashout.address,
      },
      null,
      2
    )
  )

  console.log(`CashoutMumbai: ${cashout.address}`)
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
