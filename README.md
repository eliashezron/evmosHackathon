# ⚡ CASHOUT ⚡

---

https://user-images.githubusercontent.com/60871378/205542102-80644d4a-b695-4d40-b063-46966ee5b2fe.mp4

---

**Cashout** is a crypto [off-ramping](https://www.babypips.com/crypto/learn/what-are-fiat-on-ramps-and-off-ramps) solution for [Sub-Saharan Africa](https://en.wikipedia.org/wiki/Sub-Saharan_Africa) .We have built an easily interactable website to allow users to cashout their crypto currency for their local fiat currency instantly.

Cashout also has is also developing an API as a Service platform that provices an API to allow other developers connect to their site for easily offramping crypto to the end users.

with the increased adoption of cryptocurrency in subsaharan africa as per this [chainalysis report](https://blog.chainalysis.com/reports/sub-saharan-africa-cryptocurrency-geography-report-2022-preview/#:~:text=Sub%2Dsaharan%20Africa%20accounts%20for,growth%20over%20the%20year%20prior.) that also indicates that 80% of micro crypto payment transactions **(transactions less that $1000)** happens in subsaharan Africa.
This provides an opportunity and market for an offramping solution as our daily lives still heavily revolve around fait currency for payment of goods and services.

The project leverages the power of the polygon blockchain and smart contracts to allow users deposit funds into the [cashout smartcontract](https://mumbai.polygonscan.com/address/0x9Eee3Ed0B16902bfdC11769672eaa8C5D4504ff6#code) built on the polygon Mumbai testnet network, Upon confirmation of the transaction. It Intiates the [flutterwave payment aggregator](developer.flutterwave.com) to make a fiat mobile money payment to the account number/phone number provided.

Flutterwave was chosen as a payment aggregator because it gives us access to the entire sub-saharan africa countries and currencies and thus was the most scalable payment aggregator we could use. It also charges a 1% fee on transactions allowing us to also charge and extra 1% - 1.5% fee. At 2% - 2.5% we are the cheapest available crypto off-ramping solution available in the market currently.

To provide Liquidity, Cashout hopes to raise capital for the initial fiat liquidity, After the first couple of transactions, The deposited crypto funds can then be withdrawn and liquidated from exchanges or otherwise then re-employed to the fiat account that is debited for making fiat payments. This way, the project iwill be self-sustaining.

The project only supports [USDT](https://mumbai.polygonscan.com/address/0x94Fa611d6fC3E7d58b7B9D30a9F7cB3F36B5a830#code), [USDC](https://mumbai.polygonscan.com/address/0x2E80e330E6D72bA5D74A0b466ef525e244b904f4#code) and [DAI](https://mumbai.polygonscan.com/address/0x242143931399f0B1Aa98183dc34896506d2B23EF#code) funds in the cashout contract. Used for the demo project transactions. the rationale behind this is so as to have a more predictable price pattern and also its safer this way. Its also presumed on the basis that if people expect the value of an asset to go up, They will most probally choose to hoard it and so stable coins would be the best crypto currency they would offramp. We are open to intergrating other tokens in the future.

We are also minting the [cashout puppies NFTS](https://mumbai.polygonscan.com/address/0xeA3103DFED86fb85b202cC80d05b14892608cbB3#code) that are only 100 and minted to the first 100 users who use the flatform. This is a way to create a community and use of NFTs as soulbound identification with a community.

### CashOut Team

1. [Elias Hezron](eliashezron23@gmail.com) solidity engineer and Project Lead
2. [Sash solidity](tedwasachin123@gmail.com) frontend engineer and UI designer

##### Region location

Kampala - Uganda, AFRICA

#### Using ChainLink

We implemented chainlink priceFeeds [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/hardhat/contracts/CashOutPolygon.sol#L11) to implement minimum and maximum price deposits allowed in the contract. We also use chainlink pricefeeds to return the lastest token prices in USD which is further converted down to the local native currency in the frontend.

We also used chainlink keepers compartible contract implementation [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/hardhat/contracts/CashOutPolygon.sol#L10) to check up keep for when the contract balance exceeds the minimum balance as show [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/hardhat/contracts/CashOutPolygon.sol#L181) we want the contract to hold. After that, it sets the tokenTrigger amount and then we use autotask to automatically withdraw the funds from the wallet after the upkeep. You can check the autotask function [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/main/hardhat/autotasks/relay/scheduledAutoTask.js)
You can also checkout the upkept contract [here](https://automation.chain.link/mumbai/32740258423833013145512229735262618558367027048672579697651042714966823209696)

#### Using IPFS and FILECOIN

We implemented [NFT.Storage](https://nft.storage/) IPFS storage for our NFT images [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/nftcollection/src/createMetadata.js#L55) and metadata files [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/nftcollection/src/createMetadata.js#L65)

Checkout our NFT IPFS [ IMAGE DIRECTORY](https://ipfs.io/ipfs/bafybeicrxzcls3jthxho6hwqctuygj46cldfo7cvkgyrgbi7s53uxcknby/) and [MetaData DIRECTORY](https://ipfs.io/ipfs/bafybeiezcxszxx5huhbictzlro3wuc23awklzn6boed5enk2lylypjrbie/)

### Bounty Technologies Used

1. [QuickNode rpc Nodes](https://www.quicknode.com/)
   :QuickNode rpc endpoints were used for rpc connection to the polygon Mumbai testnet blockchain both on the backend hardhat file [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/hardhat/hardhat.config.js#L30) and the frontend react application file [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/client/src/config.js#L6)

### Other Technologies Used

1. [openzeppelin Defender](https://defender.openzeppelin.com)
   We used the openZeppelin defender to automate transactions through using of the defender [autotasks](https://docs.openzeppelin.com/defender/autotasks) and [sentinels](https://docs.openzeppelin.com/defender/sentinel). We also used Defender [relayers](https://docs.openzeppelin.com/defender/relay) to take ownership of the smart contract and store our private keys. this allows for openzepplin to manage that and prevents us exposing senstive data in the cloud.
   We also use defender [admin](https://docs.openzeppelin.com/defender/admin) to manage smartcontract methods.
2. [useDapps](https://usedapp-docs.netlify.app/docs/) we implemented useDapps as rapid framework for Dapp development. And access to contract events, [readMore](https://github.com/TrueFiEng/useDApp)
3. [ethers](https://docs.ethers.io/v5/) for interacting with the ethereum blockchain and its ecosystem.
4. [flutterwave](developer.flutterwave.com) as a fiat payment aggregator

### Project Description

currently, the only available mechanisms for cashing out include Binance's peer to peer trading. however this does not support some tokens and not intergradeable and OTP trading which is expensive interms of finding a merchant and the actual fee/charge at 5-10% of the actual price.
Cashout will operate at a meer charge of 2% -2.5% which is the lowest in the market, and with our web-based UI system and simply implementable API we are easily intergrateable to any platform or wallet making it instant and convenient.

Cashout was built with polygon social Impact such as [impact plus](https://www.impact-plus.io/) in mind to easily allow the beneficiaries to cashout the crypto tokens their recieve for fiat to their mobile money contacts as this the currency and means of exchange they interact with on a daily basics while purchasing of goods and services.

The intended users of the platform is the general public, Impact markets, corporations, international remitances info of cryto currency and NGOs providing relief through crypto currency.

### usecases of cashout

These are the core reasons and motivations behind the cashout project.

1. Social Impact projects
   Cashout hopes to intergrate with impact markets projects that provide Universal basic income to locals in the subsaharan region allowing the end beneficiaries be able to easily cashout the crypto they recieve to fait inform of mobile money to their cellphones

2. crypto Remittance
   With the increased adoption of crypto currency all over the world, we are seeing increasing cases of remittances to subsaharan africa inform of crypto currency. this also was a tenet of the bitcoin founder satoshi Nakamoto. Cashout wants to enable this reality to allow the end users to simply convert their crypto for fiat

3. Crytopayments.
   One of the major hinderance to the adoption of cryptocurrency as a form of payment is the complexity involved to liquidate your crypto for fiat. Cashout hopes to solve this by allowing the user to easily connect their wallet and liquidate their cryto currency. And with the API being rapidily developed, cashout would allow companies and bussiness simply intergrate this solutions in their products.

#### Summary

Main feature of offRamping has been successfull implementend as illustrated in the demo

#### here is our it works

The user connects their wallet to the web based UI, selects a network this wish to interact with, the token on the supported networks that are supported and how much they wish to withdraw and the country they are from. The application automatically gets for them the exchange rates in their local currency. They Input their mobile money number where funds should be sent and initaites the transaction.
After ERC20 approval of the allowance. the user signs an EIP712 type message containing all the details of the transaction. For DAI tokens, the user just needs to sign the transaction to permit a transferfrom method call.

The transaction is transmitted to the relayer through the EIP2771 [context](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/ERC2771Context.sol) contract and the [forwarder](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/MinimalForwarder.sol) contract that executes the transaction on behalf of the user. The gasfees are relayed to a [relay](https://docs.openzeppelin.com/defender/relay) hotwallet hosted on [openZeppelin Defender](https://defender.openzeppelin.com/). We make a post request to a webHook url is connected to openzeppelin defender [autotask](https://docs.openzeppelin.com/defender/autotasks) to Automate the transaction. You can see the actual code implentation [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/main/hardhat/autotasks/relay/sentinelAutoTask.js). Upon [confirmation](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/client/src/utils/depositFunction.js#L75) of the transaction, A mobile money payment is [intiated](https://github.com/eliashezron/chainlinkFallHackathon/blob/5a011214a1cbcba2bbc2c82df3ecaaf09f920f79/client/src/utils/depositFunction.js#L78) to transfer funds to the user and a react toastify notification sent notifying the user on the progress of the transaction.

For the API, the developer transmits the parameters to the API and then it works as descriped above.

The minting of the NFTS to the users is through openZeppelin sentinel which monitors the smart contract events emitted when a user deposits their crypto into the smart contract and then triggers the autotask transaction to min t an NFT to that specific user. You can see the implementation [here](https://github.com/eliashezron/chainlinkFallHackathon/blob/main/hardhat/autotasks/relay/sentinelAutoTask.js)

#### Next Steps

Further development of the API to make it market ready.

#### License

This repository includes an [unlicensed](http://unlicense.org/) statement though you may want to [choose a different license](https://choosealicense.com/).
