
let btnLogin = document.querySelector('#login-btn');
let modal = document.querySelector('#myModal');
let modal2 = document.querySelector('#myModal2')
let closeBtn = document.querySelector('#close-btn');
let closeBtn2 = document.querySelector('#close-btn2');
let register = document.querySelector('.register-link')
let login = document.querySelector('.login-link')
let lune = document.querySelector('#lune')
let soleil = document.querySelector('#soleil')
let body = document.querySelector('body')
console.log(body);


lune.addEventListener('click',()=>{
    soleil.style.display = 'block'
    lune.style.display = 'none'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    
})
soleil.addEventListener('click',()=>{
    lune.style.display = 'block'
    soleil.style.display = 'none'
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
})



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
    else if (event.target === modal2){
        modal2.style.display = 'none'
    }
});

register.addEventListener('click',()=>{
    modal2.style.display = 'block';
    modal.style.display = 'none';
});

closeBtn2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

login.addEventListener('click',()=>{
    modal2.style.display = 'none';
    modal.style.display = 'block';
});
