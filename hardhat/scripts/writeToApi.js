const { writeFileSync, readFileSync, existsSync, mkdirSync } = require("fs")

function main() {
  const contractsDir = __dirname + "/../api/contracts"
  if (!existsSync(contractsDir)) {
    mkdirSync(contractsDir)
  }
  const addresses = JSON.parse(readFileSync("deployCashoutPolygon.json"))
  writeFileSync(
    contractsDir + "/contractAddresses.json",
    JSON.stringify(addresses, undefined, 2)
  )
  const minimalForwarderArtifact =
    artifacts.readArtifactSync("MinimalForwarder").abi
  const cashOutPolygonArtifact =
    artifacts.readArtifactSync("CashOutPolygon").abi
  const cashOutPuppiesArtifact =
    artifacts.readArtifactSync("CashOutPuppies").abi
  const tokenArtifact = artifacts.readArtifactSync("Token").abi
  const DaiContractArtifact = artifacts.readArtifactSync("DaiContract").abi
  writeFileSync(
    contractsDir + "/minimalForwarder.json",
    JSON.stringify(minimalForwarderArtifact, null, 2)
  )

  writeFileSync(
    contractsDir + "/CashOutPolygon.json",
    JSON.stringify(cashOutPolygonArtifact, null, 2)
  )
  writeFileSync(
    contractsDir + "/token.json",
    JSON.stringify(tokenArtifact, null, 2)
  )
  writeFileSync(
    contractsDir + "/DaiContract.json",
    JSON.stringify(DaiContractArtifact, null, 2)
  )
  writeFileSync(
    contractsDir + "/CashOutPuppies.json",
    JSON.stringify(cashOutPuppiesArtifact, null, 2)
  )
}

main()
