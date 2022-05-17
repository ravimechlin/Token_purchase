const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic ="supply outside exist survey comic sick change novel knee state pact panda";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
       host: "127.0.0.1",
      port: 7545,
      network_id:5777
    },
    ropsten: {
    provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/2729bd2402414a2ebcf8e3c659218e8c`),
    network_id: 3,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
     solc: {
       version:"0.6.2"
     }
  }
};




