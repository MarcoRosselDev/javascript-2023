import './style.css';

let randomNumber = [1, 4, 5];
const playButton = document.querySelector('.ball');
const newNumber = document.querySelector('.newNumber');
const player1Dom = document.querySelector('.player1');
const cpuDom = document.querySelector('.cpu');

const player1 = [2, 4, 5,7,10, 14,16,19, 20, 21,22,24,26, 29,30]
const cpu = [2, 4, 5,7,6, 10,16,15, 9, 11,20,21,24, 26,28]

playButton.addEventListener('click', function (e) {
  e.preventDefault();
  randomNumber.push(Math.random() * 50)
  console.log('play ball clicked');
  console.log(randomNumber[0]);
})

//newNumber.innerHTML = `<div>${randomNumber[0]}</div>`;

/* document.querySelector('#app').innerHTML = `
<div class="main-div">
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
</div>`
; */
