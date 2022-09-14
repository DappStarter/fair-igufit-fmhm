require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food nose rival often company coral light army gas'; 
let testAccounts = [
"0xe8a4fd1dadccb72663c639fb40796452dd489d980e0ea257cc64f4d01ccf3983",
"0xa11f1c9d19e0a14d27c98592478a8e6810f369f8d93e93d31f73979e12b6ab7f",
"0xb5346326a3d19739bcb37f1046d1457b482466518ad3fca4986b92d43078a78f",
"0x7f42f5cebe1e398ce26ec933a969acf31d52aaa6e98e1353efb748567d6b4840",
"0x72e2b6cde6c8733d099f166072b73f1caf3dbadbdd747ffd5e6915864e95b6c6",
"0x8a8c7cbd8246e3ac5692d6bf3a1d6d167649e1b2992244007f5395656bdf41ba",
"0x78bbc47600d1cc650c7cc9f51385f7c08b2996c241ce16eda91bc5eceecc1c87",
"0x02bea5f570f8f9f78c230df7e83b2099b00295d53b2bc6cc761eb42ed7b9b225",
"0xbb27ec975905c1da987459ccc508afc56262444b3987cc4bddee863777bf9d15",
"0x78beafeac7f4b5acc55092eac59c0ce5c5d47320cdd1fcc24f55b740faba82b4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

