import './style.css';

const playButton = document.querySelector('.ball');
const newNumber = document.querySelector('.numberPass');
const player1Dom = document.querySelector('.player1');
const cpuDom = document.querySelector('.cpu');

const player1 = [2, 4, 5,7,10, 14,16,19, 20, 21,22,24,26, 29,30];
const cpu = [1, 3, 5,7,8, 10,13,15, 19,20,21, 23,24, 26,28];
let bingo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let bingoPass = []

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
  const randomNumber = Math.round(Math.random() * bingo.length);
  const sliceBingo = bingo.splice(randomNumber, 1 );
  console.log(sliceBingo, 'sliceBingo value');
  console.log(bingo, 'bingo value');
  bingoPass.push(sliceBingo);
  const bingoDom = print(bingoPass);
  newNumber.innerHTML = bingoDom;
})

//newNumber.innerHTML = `<div>${randomNumber[0]}</div>`;

/* document.querySelector('#app').innerHTML = `
<div class="main-div">
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
</div>`
; */
