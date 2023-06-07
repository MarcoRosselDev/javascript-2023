import './style.css';
import { pokemon } from './pokemon.js';

document.querySelector('#app').innerHTML = `
  <div>
    <p>PokeAPI</p>

    <form action="">
      <input type="text">
      <button class="pokeSearch">Search</button>
    </form>
    <div class="pokeDiv"></div>
  </div>
`;

const input = document.querySelector('input');
const pokeSearch = document.querySelector('.pokeSearch');

pokeSearch.addEventListener('click', function (event) {
  event.preventDefault();

  // look if we can add fetch into another fetch and import that.
  pokemon(input.value);
})