/*
  <input type="text" class="myInput" />
      <button class="printButton">print</button>
      <button class="deleteButton">delete</button>
      <button class="deleteAllButton">delete all</button>
    </form>

    <!-- print input content -->
    <div class="container"></div>
*/
console.log("hola");

const myInput = document.querySelector(".myInput");
const ipt = document.querySelector(".ipt");

const printButton = document.querySelector(".printButton");
const container = document.querySelector(".container");

console.log(printButton);

printButton.addEventListener("click", () => {
  return (container.innerHTML = `<h1>${myInput.value}</h1>`);
});
