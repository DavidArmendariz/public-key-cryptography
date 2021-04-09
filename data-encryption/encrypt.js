const crypto = require('crypto');

function encryptWithPublicKey(publickKey, message) {
  const bufferMessage = Buffer.from(message, 'utf8');
  return crypto.publicEncrypt(publickKey, bufferMessage);
}

module.exports.encryptWithPublicKey = encryptWithPublicKey;
