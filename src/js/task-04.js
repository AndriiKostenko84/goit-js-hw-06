let counterValue = 0;
let step = 1;

const counterEl = document.querySelector ('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', handleDecrementButtonEl)
valueEl.lastElementChild.addEventListener('click', handleIncrementButtonEl);

