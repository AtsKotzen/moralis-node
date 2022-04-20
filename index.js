/* import moralis */
const Moralis = require("moralis/node")
const { serverUrl, appId , masterKey } = require("./config")
const moment = require("moment")



const getBscPrice = async () => {
    await Moralis.start({ serverUrl, appId, masterKey })
    .then(async()=>{
        let price = await Moralis.Web3API.token.getTokenPrice({
          address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          chain: "bsc",
        });
        console.log("====================================")
        console.log("BSC Price: ", price)
    })
  }
  
  
  // get the latest block number on BSC
  const getLatestBlockInfo = async ()=>{  
  let date = moment.now()
  let options = {
  chain: "bsc",
  date: date,
  };
  let block = await Moralis.Web3API.native.getDateToBlock(options);
  latestBlockNumber = JSON.stringify(block.block)
  console.log("====================================")
  console.log("Block: ", latestBlockNumber)  
  getBlockInfo(latestBlockNumber);
}

  // get block content on BSC
  const getBlockInfo = async(latestBlockNumber) => {
  const options = { chain: "bsc", block_number_or_hash: latestBlockNumber };  
  const transactions = await Moralis.Web3API.native.getBlock(options);
  console.log(transactions)
} 

  
getBscPrice()
getLatestBlockInfo()
  
  
  