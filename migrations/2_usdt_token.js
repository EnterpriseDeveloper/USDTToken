const USDTToken = artifacts.require("USDTToken");
const Web3 = require("web3");
const config = require("../config/tokenConfig");


module.exports = async (deployer, network) => {
  if (network === 'goerli' || network === "development") {
    let web3 = new Web3();
    let name = config.name
    let symbol = config.symbol
    let decimals = config.decimals
    let initialSupplyCoins = web3.utils.toWei(String(config.initialSupplyCoins), "ether");
    return await deployer.deploy(USDTToken, name, symbol, decimals, initialSupplyCoins)
  } else {
    return;
  }
};