const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');

const mainImgSlide = document.querySelectorAll('.main-img');
const imgSlide = document.querySelectorAll('.img-slide');

imgSlide.forEach(img => {
    img.addEventListener('click', (e) => {
        mainImgSlide.forEach(mainImg => {
            mainImg.classList.remove('active-slide');
        });
        mainImgSlide[e.currentTarget.id - 1].classList.add('active-slide');
    })
})

// Menu toggle 
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});