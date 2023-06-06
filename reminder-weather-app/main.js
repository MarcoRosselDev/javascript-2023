import './style.css';

console.log(import.meta.env.VITE_WEATHER_KEY);

document.querySelector('#app').innerHTML = `
  <div>


    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <input type="text" placeholder="Write some city...">
    <button id="weather">weather</button>
  </div>
`;
