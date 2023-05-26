import './style.css';

const a = document.querySelectorAll('.app');

a.forEach(e =>{
  e.innerHTML = `
  <div class="main-div">
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
});
