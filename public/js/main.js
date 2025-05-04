
let btnLogin = document.querySelector('#login-btn');
let modal = document.querySelector('#myModal');
let closeBtn = document.querySelector('#close-btn');
let register = document.querySelector('.register-link')
console.log(btnLogin);
console.log(register);

btnLogin.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});