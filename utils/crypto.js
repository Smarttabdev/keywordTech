const crypto = require('crypto');
const ENC_KEY = "ckqDs4uvy0ktbABFno$ji&ezstK5ioz";
const IV = "AI1999Gorithmus";

module.exports.encode = function (data)
{
  var encrypt = ((val) =>
  {
    let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  });
  return encrypt(data);
}

module.exports.decode = function decode(data)
{
  var decrypt = ((encrypted) =>
  {
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
  });
  return decrypt(data);
}