// DOM Manipulation

// GetElementById()
const title = document.getElementById('main-headin');
console.log(title);

// GetElementByClassName()
const listItems = document.getElementsByClassName('list-items')
console.log(listItems);
// retorna una lista iterable de elementos tarjeteables

// getElementByTagName()
const listItemsTag = document.getElementsByTagName('li')
console.log(listItemsTag);
// obtengo el mismo resultado pero no requiero de agregar classes
// a los elementos del DOM

// querySelector()
const li = document.querySelector('li')
console.log(li);
// querySelector selecciona el primero de los elementos con
// ese tag, puede ser div o h1, pero solo aplica el priomero que encuentre

// querySelectorAll()
const allLi = document.querySelectorAll('li');
console.log(allLi);
// devuelve una lista iterable de elementos con ese tag.