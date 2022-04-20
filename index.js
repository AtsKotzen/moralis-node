/* import moralis */
const Moralis = require("moralis/node")
const { serverUrl, appId , masterKey } = require("./config")
const moment = require("moment")

moment.now();


const getBscPrice = async () => {
    await Moralis.start({ serverUrl, appId, masterKey })
    .then(async()=>{
        const price = await Moralis.Web3API.token.getTokenPrice({
          address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          chain: "bsc",
        });
        console.log("====================================")
        console.log("BSC Price: ", price)
    })
  }
  // get the latest block on BSC
const getLatestBlock = async ()=>{
  const date = moment.now()
  const options = {
  chain: "bsc",
  date: date,
  };
  const block = await Moralis.Web3API.native.getDateToBlock(options);
  console.log("====================================")
  console.log("Block: ", block)
}

  // get block content on BSC
// const getBlockInfo = async() => {
//     const options = { chain: "bsc", block_number_or_hash: "17099778" };  
//     const transactions = await Moralis.Web3API.native.getBlock(options);
//     console.log(transactions)
// } 

  
  getBscPrice()
  //getBlockInfo()
  getLatestBlock()
  
  
  