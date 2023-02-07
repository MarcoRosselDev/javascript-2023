const myInput = document.querySelector(".myInput");
// botones
const printButton = document.querySelector(".printButton");
const deleteButton = document.querySelector(".deleteButton");
const deleteAllButton = document.querySelector(".deleteAllButton");
// div
const container = document.querySelector(".container");

// push on array object to save on localStorage
let save = [];

printButton.addEventListener("click", () => {
  save.push(myInput.value);
  myInput.value = ""; // clean te input to write another task

  console.log(save);
});

const printDOM = () => {
  container.innerHTML = `<h1>${myInput.value}</h1>`;
};
