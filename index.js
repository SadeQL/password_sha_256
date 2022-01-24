/* import { randomBytes } from "crypto"; */
import { subtle, randomBytes } from "crypto";

const hashGenerator = async () => {
  const userpassword = document.getElementById("userpassword").value;
  console.log(userpassword);
  const utf8 = new TextEncoder().encode(userpassword);
  const hashBuffer = await subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  console.log(hashHex);
  return hashHex;
};

hashGenerator();

function hashPassword(password) {
  var salt = randomBytes(128).toString("base64");
  var iterations = 10000;
  var hash = hashGenerator(password, salt, iterations);
  console.log(password);

  return {
    salt: salt,
    hash: hash,
    iterations: iterations,
  };
}

hashPassword();
