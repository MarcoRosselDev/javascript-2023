// styling Elements

document.getElementById('main-headin').style.color = 'green'

//document.querySelectorAll('li').style.color = 'red'
// no funciona asi por que querySelectorAll nos devueleve un arreglo

const allLi = document.querySelectorAll('li');

for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.fontSize = '1.6rem'
    allLi[i].style.color = 'red'
}

// agregar elemento li a ul
// para eso primero lo creamos

const newLi = document.createElement('li')
newLi.innerText = 'Spider man';
newLi.style.color = 'red'
newLi.style.fontSize = '1.6rem'
// seleccionamos el elemento donde queremos inyectar el elemento creado
const ul = document.querySelector('ul');
ul.append(newLi)

// lo agrega al final
// podemos hacer una funcion para agregar los estilos automaticamente

newLi.remove()
