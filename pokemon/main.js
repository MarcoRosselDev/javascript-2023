import './style.css';
import { pokemon } from './pokemon.js';

document.querySelector('#app').innerHTML = `
  <div>
    <p>PokeAPI</p>

    <form action="">
      <input type="text">
      <button class="pokeSearch">Search</button>
    </form>
  </div>
`;

const input = document.querySelector('input');
const pokeSearch = document.querySelector('.pokeSearch');

pokeSearch.addEventListener('click', function (event) {
  event.preventDefault();

  // look the poke api documentation to search a pokemon and print her img into a new div

  console.log(input.value);
  input.value = '';
})