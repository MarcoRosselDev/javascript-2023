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

  async function search(movie) {
    try {
      const request = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`);
      const data = await request.json();

      // ojo que devuelve 20 resultados de el titpulo de la search movie

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  search(input.value)

})
