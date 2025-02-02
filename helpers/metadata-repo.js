// const { ethers } = require('ethers')
// const ERC721_ABI = require('../contracts/ERC721.json')
// const CacheService = require('../cache')
const fetch = require('node-fetch');

// const ttl = 30; //cache for 30 seconds by default, overriden to 0 (unlimited) for getById below;
// const cache = new CacheService(ttl);

// const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
// const erc721Contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ERC721_ABI.abi, provider);

const AUTO_REVEAL_ID = 1200;

function getMetadata(id) {
  return fetch(`${process.env.SOURCE_BASE_URI}${id}`, {method: 'GET'})
            .then(res => {
              return res.json();
            })
            .then((data) => {
              return data;
            })
}

const MetadataRepo = {
  // getAll() {
  //   return cache.get("TotalSupply", () => erc721Contract.totalSupply().then((bigNumber) => bigNumber.toNumber()))
  //     .then((total) => {
  //       return total;
  //     });
  // },
  
  getById: async (id) => {
    if (id <= AUTO_REVEAL_ID) {
      return await getMetadata(id);
    }
    else {
      return {
        image: "https://ipfs.io/ipfs/bafkreievyqdorbs66dm4cbno3oogafklpyodncjmnxx5smkeojbequpxgm",
        name: "Goblin Loot WTF - Unrevealed",
        description: "What the feck? Iz mostly CRUD! May-b summink speshul. May-b.",
        attributes: []
        };
    }
    // return cache.get(`Token_${id}`, () => {
    //     return erc721Contract
    //     .ownerOf(id)
    //     .then(() => true)
    //     .catch(() => false);
    //   }, 0)
    //   .then((exists) => {
    //     if (exists) {
    //       return getMetadata(id);
    //     } else {
    //       return { error: `You may lookee for number ${id} but yees gotta mint it first. SNEAK!`};
    //     }
    //   });
  }
};

module.exports = MetadataRepo;


