// ejercicio 162: estudiar el metodo .fill

const numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(numeros.fill(0, 2, 4)); // [1, 2, 0, 0, 5, 6, 7]

console.log(numeros.fill(3, 5)); // [1, 2, 0, 0, 5, 3, 3]

console.log(numeros.fill(2)); // [2, 2, 2, 2, 2, 2, 2]

// fill recibe asta 3 valores

// .fill(numero1) ----> valor que reemplazara el elemento que por defecto son todos (obligatoria)
// .fill(numero1, numero2) ---> numero2 indica desde que posicion iniciar el reemplazo (opcional)
// .fill(nuemro1, nuemro2, numero3) --> numero 3 indica la ultima posicion a reemplazar (opcional)
