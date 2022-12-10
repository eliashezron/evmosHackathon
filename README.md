# ⚡ CASHOUT ⚡

---

https://user-images.githubusercontent.com/60871378/205542102-80644d4a-b695-4d40-b063-46966ee5b2fe.mp4

---

**Cashout** is a crypto [off-ramping](https://www.babypips.com/crypto/learn/what-are-fiat-on-ramps-and-off-ramps) solution for [Sub-Saharan Africa](https://en.wikipedia.org/wiki/Sub-Saharan_Africa) .We have built an easily interactable website to allow users to cashout their crypto currency for their local fiat currency instantly.

Cashout also has is also developing an API as a Service platform that provices an API to allow other developers connect to their site for easily offramping crypto to the end users.

with the increased adoption of cryptocurrency in subsaharan africa as per this [chainalysis report](https://blog.chainalysis.com/reports/sub-saharan-africa-cryptocurrency-geography-report-2022-preview/#:~:text=Sub%2Dsaharan%20Africa%20accounts%20for,growth%20over%20the%20year%20prior.) that also indicates that 80% of micro crypto payment transactions **(transactions less that $1000)** happens in subsaharan Africa.
This provides an opportunity and market for an offramping solution as our daily lives still heavily revolve around fait currency for payment of goods and services.

The project leverages the power of the EVM blockchains and smart contracts deployed to [polygon Mumbai](https://mumbai.polygonscan.com/address/0xC759Bb0e3c478a787A7A59fbc553caa40668Db94#code), [BNB testnet](https://testnet.bscscan.com/address/0xafb5d29c6df9ea4aa69f9ee0ff873daab9785d83#code), [Goerli](https://goerli.etherscan.io/address/0x833e018B765087b6be5fd4830019ec43964F8Dcb#code) and [Evmos](https://evm.evmos.org/address/0xA5C45ADEde32A4AEC8A754d9ee43804A61AB7aB5) to allow users deposit funds into the [cashout smartcontract](https://github.com/eliashezron/evmosHackathon/blob/93d2421f38bd123490577a37e5980010c4ce5b18/hardhat/contracts/CashOutContract.sol#L8), Upon confirmation of the transaction. It Intiates the [flutterwave payment aggregator](developer.flutterwave.com) to make a fiat mobile money payment to the account number/phone number provided.

Flutterwave was chosen as a payment aggregator because it gives us access to the entire sub-saharan africa countries and currencies and thus was the most scalable payment aggregator we could use. It also charges a 1% fee on transactions allowing us to also charge and extra 1% - 1.5% fee. At 2% - 2.5% we are the cheapest available crypto off-ramping solution available in the market currently.

To provide Liquidity, Cashout hopes to raise capital for the initial fiat liquidity, After the first couple of transactions, The deposited crypto funds can then be withdrawn and liquidated from exchanges or otherwise then re-employed to the fiat account that is debited for making fiat payments. This way, the project iwill be self-sustaining.

The project only supports ERC20 tokens of stable coins of USDT and USDT funds in the cashout contract. Used for the demo project transactions. the rationale behind this is so as to have a more predictable price pattern and also its safer this way. Its also presumed on the basis that if people expect the value of an asset to go up, They will most probally choose to hoard it and so stable coins would be the best crypto currency they would offramp. We are open to intergrating other tokens in the future.

### CashOut Team

1. [Elias Hezron](eliashezron23@gmail.com) solidity engineer and Project Lead

##### Region location

Kampala - Uganda, AFRICA

### Evmos
The project is built on multiple EVM chains but also allows users to offRamp COSMOS based ERC20 Tokens through EVMOS. In the future we intend to use evmos to allow ethereum users to interact with our application and offramp their ethereum based tokens through evmos. For this we intend on using [gravity Bridge portal](https://bridge.blockscape.network/) and [evmos IBC transfer](https://app.evmos.org/transfer).

### Other Technologies Used

1. [useDapps](https://usedapp-docs.netlify.app/docs/) we implemented useDapps as rapid framework for Dapp development. And access to contract events, [readMore](https://github.com/TrueFiEng/useDApp)
2. [ethers](https://docs.ethers.io/v5/) for interacting with the ethereum blockchain and its ecosystem.
3. [flutterwave](developer.flutterwave.com) as a fiat payment aggregator

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
After ERC20 approval of the allowance. the user signs an EIP712 type message containing all the details of the transaction. upon confirmation of the transaction. An api call is made to flutterwave to intiate the payment to funds to the phone number the user input.

#### Next Steps

Further development of the API to make it market ready.

#### License

This repository includes an [unlicensed](http://unlicense.org/) statement though you may want to [choose a different license](https://choosealicense.com/).
