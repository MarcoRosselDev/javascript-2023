// ejercicio 106: uso del metodo concat para concatenar texto.

const str1 = "Marco";
const str2 = "Rossel";
const str3 = "Welcome to JavaScript";

console.log(str1.concat(" ", str2));
// Expected output: "Marco Rossel"

console.log(str2.concat(", ", str1));
// Expected output: "Rossel, Marco "

console.log(str1.concat(" ", str2, ", ", str3));
// Expected output: "Marco Rossel, Welcome to JavaScript "
