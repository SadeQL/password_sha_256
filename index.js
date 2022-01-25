function hashPassword() {
  const userpassword = document.getElementById("userpassword").value;
  var salt = CryptoJS.lib.WordArray.random(128 / 8);
  var iterations = 10000;
  var hash = CryptoJS.PBKDF2(userpassword, salt, iterations);
  var key128Bits = CryptoJS.PBKDF2(hash, salt, {
     keySize: 128 / 32
    });

  return {
    salt: salt,
    hash: hash.toString(CryptoJS.enc.Base64),
    iterations: iterations,
    key128Bits: key128Bits
  };
}