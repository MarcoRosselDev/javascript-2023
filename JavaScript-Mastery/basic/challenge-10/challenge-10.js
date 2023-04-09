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

function saludar() {
    printGreeting.innerHTML = `<h2>Buenos dias ${inputName.value}<h2/>`
}


buttonSend.addEventListener('click', () => {
    saludar()
/*     printGreeting.innerHTML = `<h1>hi ${inputValue}<h1/>`
    console.log(inputValue);
    console.log(typeof inputValue); */
})