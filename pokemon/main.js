import './style.css';
import { pokemon } from './pokemon.js'

pokemon();

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
