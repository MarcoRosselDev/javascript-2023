import './style.css';

const apiKey = import.meta.env.VITE_WEATHER_KEY

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <input type="text" placeholder="Write some city...">
    <button id="weather">weather</button>
    <div class="response"></div>
  </div>
`;

const input = document.querySelector('input');
const weatherBtn = document.querySelector('#weather');
const response = document.querySelector('.response');

weatherBtn.addEventListener('click', function (event) {
  event.preventDefault();
  
  async function weatherFunc(city) {
    try {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await request.json();

      response.innerHTML = `
      
      <p>name : ${data.name}</p>
      <p>visibility : ${data.visibility}</p>
      <p>description : ${data.weather[0].description}</p>
      <p>feels like : ${data.main.feels_like}</p>
      <p>humidity : ${data.main.humidity}</p>
      <p>pressure : ${data.main.pressure}</p>
      <p>temperatura : ${data.main.temp}</p>
      <p>temperatura maxima : ${data.main.temp_max}</p>
      <p>temperatura minima : ${data.main.temp_min}</p>
      
      `

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  weatherFunc(input.value);

  input.value = ''; // ------------------> limpiamos el input para que se pueda escribir otra ciudad.

})