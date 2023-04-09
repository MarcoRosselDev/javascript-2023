/*      Challenge 10
eng

Challenge 10
Write a function called hello() that outputs a 
greeting in the console when the function 
runs.
Save this to a file called challenge10.html
----------------------------------------------
spa

escribe una funcion llamada hello() que genera un
saludo en la consola cuando la funcion corra.
*/
const inputName = document.getElementById('inputName');
const buttonSend = document.getElementById('buttonInputName');
const printGreeting = document.getElementById('parr');

let nameE = inputName.value


function printDOM(n) {
    console.log(typeof n);
    printGreeting.innerText = `Buenos dias ${n} !`
}


buttonSend.addEventListener('click', function (event) {
    event.preventDefault();
    const result = printDOM(nameE)
    console.log(result);
})

