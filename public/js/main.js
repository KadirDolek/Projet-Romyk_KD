let btnLogin = document.querySelector('#login-btn');
let modal = document.querySelector('#myModal');
let modal2 = document.querySelector('#myModal2');
let closeBtn = document.querySelector('#close-btn');
let closeBtn2 = document.querySelector('#close-btn2');
let register = document.querySelector('.register-link');
let login = document.querySelector('.login-link');
let lune = document.querySelector('#lune');
let soleil = document.querySelector('#soleil');
let body = document.querySelector('body');
let carouselbtn = document.querySelectorAll('[data-carousel-button]'); 
let carousel = document.querySelector('[data-carousel]');
let divcar = document.querySelectorAll('#divcar')
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('#AncreLien');

console.log(body);

// Gestion du mode sombre/clair

lune.addEventListener('click', () => {
    soleil.style.display = 'block';
    lune.style.display = 'none';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    body.classList.add('dark-mode');
});

soleil.addEventListener('click', () => {
    lune.style.display = 'block';
    soleil.style.display = 'none';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    body.classList.remove('dark-mode'); 
});


btnLogin.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    else if (event.target === modal2){
        modal2.style.display = 'none';
    }
});

register.addEventListener('click',() => {
    modal2.style.display = 'block';
    modal.style.display = 'none';
});

closeBtn2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

login.addEventListener('click',() => {
    modal2.style.display = 'none';
    modal.style.display = 'block';
});


carouselbtn.forEach(button => {
    button.addEventListener('click',() => {
        let offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        let slides = button.closest('[data-carousel]').querySelector('[data-slides]');

        let activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});


setInterval(() => {
    let slides = carousel.querySelector('[data-slides]');
    let activeSlide = slides.querySelector('[data-active]');
    let currentIndex = [...slides.children].indexOf(activeSlide);
    let nextIndex = (currentIndex + 1) % slides.children.length;
    
    slides.children[nextIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}, 3000);


if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    const navItems = document.querySelectorAll('#AncreLien a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}