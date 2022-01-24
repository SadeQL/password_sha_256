const userInput = (userpassword) => {
  userpassword = document.getElementById("userpassword");
  /* alert("password taken into account"); */
  return userpassword;
};

const hashGenerator = (userpassword) => {
  const utf8 = new TextEncoder().encode(userpassword);
  return crypto.subtle.digest("SHA-256", utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, "0"))
      .join("");
    document.getElementById("result").innerHTML = hashHex;
    console.log(hashHex);
    return hashHex;
  });
};

hashGenerator(userInput());
