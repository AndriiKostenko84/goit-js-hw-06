const nameInputEl = document.querySelector('#name-input');

const nameOutputEl = document.querySelector ('#name-output');

const intupText = (event) => {
    if (nameInputEl.value === '') {
        nameOutputEl.textContent = 'Anonymous';
    }
    else
    nameOutputEl.textContent = event.currentTarget.value;
}
nameInputEl.addEventListener('input', intupText);