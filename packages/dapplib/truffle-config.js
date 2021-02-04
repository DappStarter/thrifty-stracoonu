require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note soccer mixture gesture bread swift tank'; 
let testAccounts = [
"0x3d875a1e0292f70484d605a1765cdc17df2c044c7e06dd527b702202437fd0cf",
"0x47d6282a0b344804444a62eb70104a91f316fbdab87ec29eb7bfb13c658dfc0c",
"0xbf319ceb5337682d58300a0e693dde2db12535bc130f5bdf70697f548e73e240",
"0x0328b272967fdb472127fa788dd958470bb7435057ef05ea94bdbf4dc097a0ad",
"0x0e6a700a104539571a760cadff74e52b2c9ad4c9d2113f77d5c196c8808e7144",
"0x68316e535364ac9df994f05200de223840068d3d09eb1f59659addf92616ba78",
"0x1e01a04c8745a9544f0ac6503813d66d41a19fdd98554d5e4bfd1ef5592529c5",
"0xd5ba7e03c8bd9e4efd996b141ac2945758db29787cb9186d92cc32051810ef7a",
"0xdcecb1f9eede8e2deaa21f192848d8779d41a89412b1fde32e5a24368a5554fd",
"0xa8ebf8fca6d4b80b97e087aa6831a2cb9de581b72a340d1f02bf13e948078e20"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
