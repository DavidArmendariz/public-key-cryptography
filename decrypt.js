const crypto = require('crypto');

function decryptWithPrivateKey(privateKey, encryptedMessage) {
  return crypto.privateDecrypt(privateKey, encryptedMessage);
}

function decryptWithPublicKey(publickKey, encryptedMessage) {
  return crypto.publicDecrypt(publickKey, encryptedMessage);
}

module.exports.decryptWithPrivateKey = decryptWithPrivateKey;
module.exports.decryptWithPublicKey = decryptWithPublicKey;
