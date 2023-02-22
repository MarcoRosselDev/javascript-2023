// ejercicion 257 : crear una literal de objeto con una funcion generadora de factorial.

const objetoFactorial = {
  factorial: 1,
  auxiliar: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    this.auxiliar *= this.factorial;
    ++this.factorial;
    return { value: this.auxiliar };
  },
};

for (let i = 1; i <= 20; i++) {
  console.log(objetoFactorial.next().value);
}
// 1
// 2
// 6
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 3628800
// 39916800
// 479001600
// 6227020800
// 87178291200
// 1307674368000
// 20922789888000
// 355687428096000
// 6402373705728000
// 121645100408832000
// 2432902008176640000
