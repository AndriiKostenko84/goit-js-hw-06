const inputWidthEl = document.querySelector('#validation-input');
const lengthInput = Number(inputWidthEl.getAttribute ('data-length'))

inputWidthEl.addEventListener('blur', () => {
    if (inputWidthEl.value.length !== lengthInput) {
        inputWidthEl.classList.add('invalid');
        inputWidthEl.classList.remove('valid');
    } else {
        inputWidthEl.classList.add('valid');
        inputWidthEl.classList.remove('invalid');
    }
});