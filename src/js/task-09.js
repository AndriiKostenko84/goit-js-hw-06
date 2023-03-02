const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color');

changeColorBtnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor(); 
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
