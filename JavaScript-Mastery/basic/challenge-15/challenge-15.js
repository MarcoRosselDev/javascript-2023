/*      Challenge 15
eng

For this challenge, add an array of foods and
put 3-5 elements in the array. Then make a
new function called hospitality(); after the
hello(); function.
The new function will take two parameters, a
name and a gift, which will be an array. Have
this function run the hello() function and
output the result to the console. Then have it
loop through the gift array and offer a gift to
the visitor by name and output that to the
console

-------------------------------------------------
spa

Para este desafío, agregue una variedad de alimentos y
poner 3-5 elementos en la matriz. Luego haz un
nueva función llamada hospitalidad(); después de la
Hola(); función.
La nueva función tomará dos parámetros, un
nombre y un regalo, que será una matriz. Tener
esta función ejecuta la función hello() y
enviar el resultado a la consola. Entonces tenlo
recorra la matriz de regalos y ofrezca un regalo a
el visitante por su nombre y enviarlo al
consola
*/

const saludo = document.getElementById('saludo')
const printRegalo = document.getElementById('regalo')
const regalos = ['Desayuno sorpresa', 'Bombon de chocolate', 'Jugete Coleccionable', 'Libro', 'Reloj', 'Gadget']
//const prp = prompt('Cual es tu nombre ?', 'Usuario')

function hello(name) {
    if (prp == null || prp == '') {
        return "no ingresaste un nombre"
    } else {
        return `Buenos dias ${name} !`
    }
}


let randomNumber = Math.floor(Math.random() * (regalos.length ));
//console.log(randomNumber);
for (let i = 0; i < 10; i++) {
    
}
/* function hospitality(name) {
    let randomNumber = Math.floor(Math.random() * (regalos.length - 1));
    const regaloRadom = regalos[randomNumber];
    if (prp == null || prp == '') {
        return "Te perdiste un regalo !"
    } else {
        return `¡ ${name}, Te queremos premiar con un ${regaloRadom} !`;
    }

}

const greetResturn = hello(prp);
saludo.innerText = greetResturn;
const gitfHospitality = hospitality(prp);
printRegalo.innerText = gitfHospitality;
 */
