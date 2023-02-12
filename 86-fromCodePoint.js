// ejercicio 86: Uso de la funcioni static fromCodePoint.

console.log(String.fromCodePoint(0x41)); // A
console.log(String.fromCodePoint(0x231b)); // ⌛
console.log(String.fromCodePoint(0x1f4bb)); // 💻

// es mas potente que fromCharCode, por que consume mas memoria pero por ende
// permite un mayor catalogo de emojis y caracteres mas complejos como los chinos
