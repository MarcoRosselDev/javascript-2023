const h1 = document.querySelector("h1");
const div = document.querySelector("div");

div.addEventListener("mouseover", function () {
  h1.innerHTML = "The mouse is over the div";
  div.style.backgroundColor = "green";
});

div.addEventListener("mouseout", function () {
  h1.innerHTML = "Mouse events 2";
  div.style.backgroundColor = "pink";
});
