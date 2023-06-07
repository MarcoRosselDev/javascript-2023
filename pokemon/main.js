import './style.css';
//import { pokemon } from './pokemon.js';

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

  async function pokemon(name) {

    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const data = await request.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

  pokemon(input.value);
})