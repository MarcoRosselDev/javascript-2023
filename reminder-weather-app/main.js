import './style.css';

const apiKey = import.meta.env.VITE_WEATHER_KEY

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <input type="text" placeholder="Write some city...">
    <button id="weather">weather</button>
  </div>
`;

const input = document.querySelector('input');
const weatherBtn = document.querySelector('#weather');

weatherBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(input.value);
  input.value = '';

  async function weatherFunc(city) {
    try {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`);
      const data = await request.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  weatherFunc();

})