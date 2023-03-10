const myInput = document.querySelector(".myInput");
// botones
const printButton = document.querySelector(".printButton");
const deleteButton = document.querySelector(".deleteButton");
const deleteAllButton = document.querySelector(".deleteAllButton");
// div
const container = document.querySelector(".container");

// push on array object to save on localStorage
let save = [];

// preguntar si existe un local Storage
const areLocal = JSON.parse(localStorage.getItem("example"));

const printDOM = () => {
  // iterate for the save object to not manipulate the DOM all time and just manipulated it one time in the end.
  let printEND = "";
  for (i = 0; i < save.length; i++) {
    printEND += `<h2>${save[i]}</h2>`;
  }

  container.innerHTML = printEND;
};

printButton.addEventListener("click", () => {
  save.push(myInput.value);
  myInput.value = ""; // clean te input to write another task
  window.localStorage.setItem("example", JSON.stringify(save));
  // a la vuelta preguntar si existe un local storage entonces aplicar la funcion printDOM()
  printDOM();
});

if (areLocal) {
  save = areLocal;
  printDOM();
}

deleteButton.addEventListener("click", () => {
  areLocal.pop();
  window.localStorage.setItem("example", JSON.stringify(save));
  printDOM();
});

deleteAllButton.addEventListener("click", () => {
  save = [];
  window.localStorage.setItem("example", JSON.stringify(save));
  printDOM();
});
