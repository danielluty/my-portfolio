/* Fade in body */
(() => {
    document.getElementById('body').style.opacity = 1;
})();


/** Toggle nav */
const toggler = document.querySelector('.toggler');
const navItems = Array.from(document.querySelectorAll('.nav__item'));

toggler.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('nav--opened');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('nav--opened');
    })
});



/** Changing toggler on scroll */

(() => {
    window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        console.log(scrolled);
        console.log(scrollable);
    });
})();



/** Smooth scrolling */