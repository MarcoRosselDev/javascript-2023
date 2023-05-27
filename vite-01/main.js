import './style.css';

let randomNumber = [1, 4, 5];
const playButton = document.querySelector('.ball');
const newNumber = document.querySelector('.newNumber');
const player1Dom = document.querySelector('.player1');
const cpuDom = document.querySelector('.cpu');

const player1 = [2, 4, 5,7,10, 14,16,19, 20, 21,22,24,26, 29,30];
const cpu = [1, 3, 5,7,8, 10,13,15, 19,20,21, 23,24, 26,28];

function print(arr) {
  let domPrint = '';
  for (let i = 0; i < arr.length; i++) {
    domPrint += `<div>${arr[i]}</div>`;
  }
  return domPrint;
}

const funPrint = print(player1);
const cpuPrint = print(cpu)
player1Dom.innerHTML = funPrint;
cpuDom.innerHTML = cpuPrint;


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
