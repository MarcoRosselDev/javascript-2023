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
      const request = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`);
      const data = await request.json();

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  search()

})
