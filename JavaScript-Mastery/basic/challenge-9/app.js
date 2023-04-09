const inputColor = document.getElementById('inputColor')
const butonColor = document.getElementById('buttonEnviar')
const divColor = document.getElementById('color')
const then = document.getElementById('then')

function colorSelect(event) {
    event.preventDefault();
    const color = inputColor.value;

    if (color == 'red' || 'blue' || 'yellow') {
        divColor.style.backgroundColor = color
        console.log('primer if');
    } else if (color == 'orange' || 'green' || 'purple') {
        divColor.style.backgroundColor = color
        console.log('segundo if');
    } else {
        then.innerText = "no escribiste ninguna de las opciones"
        console.log('tercer if');
    }
}

butonColor.addEventListener('click', colorSelect) 
//inputColor.addEventListener('input', colorSelect)

/* 1    ingrese un color en texto
2   imprimir el color con el texto ? o un div con el color
3   manejar los errores en caso de malos ingresos */