import './style.css';

const playButton = document.querySelector('.ball');
playButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('play ball clicked');
})

/* document.querySelector('#app').innerHTML = `
<div class="main-div">
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
</div>`
; */
