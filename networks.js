var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('7a05fa4ex'),
  addressVersion: 78,
  privKeyVersion: 128+78,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('00000c4aebb4eb5063c95985ebec40b550dc6efb43d5f77b445dcb04936caa79'),
    merkle_root: hex('7021ac197432aff3f7e9f9a770f0fc16974a06ae3f1258804a58d7146e5c02fe'),
    height: 0,
    nonce: 277106,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1507555516,
    bits: 0x1f00ffff
  },
  dnsSeeds: [
    'walletbuilders.com'
  ],
  defaultClientPort: 24401
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('7dd8dc4d'),
  addressVersion: 111,
  privKeyVersion: '239',
  P2SHVersion: 196,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('0x00000c4aebb4eb5063c95985ebec40b550dc6efb43d5f77b445dcb04936caa79'),
    merkle_root: hex('7021ac197432aff3f7e9f9a770f0fc16974a06ae3f1258804a58d7146e5c02fe'),
    height: 0,
    nonce: 277106,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1511862256,
    bits: 0x1f00ffff
  },
  dnsSeeds: [],
  defaultClientPort: 34401
};
