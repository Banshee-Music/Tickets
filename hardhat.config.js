require("@nomicfoundation/hardhat-toolbox");

// also on Fantom Network
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
  	polygon_amoy: {
  		url: 'https://rpc-amoy.polygon.technology/',
  		chainId: 80002,
  		accounts: ['']
  	}
  }
};
