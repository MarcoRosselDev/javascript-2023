import './style.css';

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

document.querySelector('#app').innerHTML = `
  <div>
    <p>tmdb movie api</p>

    <input type="text" placeholder="search movie ...">
    <button class="movieBtn">search</button>


  </div>
`;

const input = document.querySelector('input');
const movieBtn = document.querySelector('.movieBtn');

movieBtn.addEventListener('click', function (event) {
  event.preventDefault();

  console.log(input.value);

  input.value = '';
})
