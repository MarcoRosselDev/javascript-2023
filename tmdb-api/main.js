import './style.css';

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
