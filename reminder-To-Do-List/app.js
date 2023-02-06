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

printButton.addEventListener("click", function () {
  console.log("click");
});
