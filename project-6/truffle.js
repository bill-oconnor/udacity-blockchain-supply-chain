const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");
const mnemonic = fs.readFileSync("./mnemonic.txt", {encoding:'utf8', flag:'r'});
const infuraKey = fs.readFileSync("./infura-id.txt", {encoding:'utf8', flag:'r'});

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 30000030,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};