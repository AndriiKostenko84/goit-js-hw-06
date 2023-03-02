const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const {
        elements: { email, password }
    } = event.currentTarget;
   
    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled in');
    }
    const formData = {
        [email.name]: email.value,
        [password.name]: password.value
    };
    console.log(formData)

    event.currentTarget.reset();
});



