const { readFileSync } = require('fs')
const path = require('path')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const config = require("./config/networks");

module.exports = {
  networks: {
    goerli: {
      provider: () => {
        const mnemonic = readFileSync(path.join(__dirname, 'goerli_mnemonic'), 'utf-8')

        return new HDWalletProvider(mnemonic, config.goerli, 0, 10)
      },
      network_id: 5,
      gasPrice: 15000000001,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.6', // Fetch exact version from solc-bin (default: truffle's version)
      docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
      parser: 'solcjs',
      settings: { // See the solidity docs for advice about optimization and evmVersion
        // optimizer: {
        //   enabled: false,
        //   runs: 200
        // }
        evmVersion: 'constantinople'
      }
    }
  }
}
