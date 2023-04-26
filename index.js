const button = document.querySelector('.ball__button');
const field = document.querySelector('.ball__field');
const ball = document.querySelector('.ball');

button.addEventListener('click', () => {
  ball.classList.add('ball__animation');
});
