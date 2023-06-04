import './style.css';

const playButton = document.querySelector('.ball');
const newNumber = document.querySelector('.numberPass');
const player1Dom = document.querySelector('.player1');
const player2Dom = document.querySelector('.player2');

const player1 = [2, 4, 5,7,10, 14,16,19, 20, 21,22,24,26, 29,30];
const player2 = [1, 3, 5,7,8, 10,13,15, 19,20,21, 23,24, 26,28];
let bingo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let nuevaBola = [];

function print(arr) {
  let domManipulation = ''; //------------------------> esto para no manipular el dom x cantidad de veces a solo 1 vez al final.
  for (let i = 0; i < arr.length; i++) {
    domManipulation += `<div>${arr[i]}</div>`;
  }
  return domManipulation; //------------------------->
}

const printPlayer1 = print(player1);
const printPlayer2 = print(player2)
player1Dom.innerHTML = printPlayer1;
player2Dom.innerHTML = printPlayer2;


playButton.addEventListener('click', function (e) {
  e.preventDefault();
  const randomNumber = Math.round(Math.random() * bingo.length);
  const spliceBingo = bingo.splice(randomNumber, 1 );
  

  if (spliceBingo > 0 || spliceBingo < 31) {
    nuevaBola.push(spliceBingo);
    console.log(bingo);
    console.log(nuevaBola);
    console.log(spliceBingo);

    const bingoDom = print(nuevaBola);
    newNumber.innerHTML = bingoDom;
    
    // preguntar si este numero esta en player1 y player2
    console.log(player2.indexOf(spliceBingo[0])); // devuelve -1, probemos despues
    console.log(player1.indexOf(spliceBingo[0])); // devuelve -1, probemos despues

    if (player1.indexOf(spliceBingo[0] == true)) {
      
      player1.splice(spliceBingo[0], 1);
    }
    if (player2.indexOf(spliceBingo[0] == true)) {

      player1.splice(spliceBingo[0], 1);
    }
    
  } else {
    console.log('salio un numero no esperado');
  }



})
