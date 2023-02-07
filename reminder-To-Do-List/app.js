/*
  <input type="text" class="myInput" />
      <button class="printButton">print</button>
      <button class="deleteButton">delete</button>
      <button class="deleteAllButton">delete all</button>
    </form>

    <!-- print input content -->
    <div class="container"></div>
*/

const myInput = document.querySelector(".myInput");

const printButton = document.querySelector(".printButton");
const container = document.querySelector(".container");

printButton.addEventListener("click", () => {
  container.innerHTML = `<h1>${myInput.value}</h1>`;
});
