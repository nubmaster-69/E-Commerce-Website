const menuToggler = $('.menu-toggler')
const navLinks = $('.nav-links')
const navBar = document.querySelector('.nav-bar');
const accountToggle = document.querySelector('.no-account');
const logoutBtn = document.querySelector('.sign-out');

$(document).ready(() => {
    menuToggler.click(() => {
        navLinks.toggleClass('menu-active')
        menuToggler.toggleClass('menu-close')
    })
})

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 0);
});

accountToggle.addEventListener('click', () => {
    window.location.href = "./login.html";
})

window.addEventListener('load', () => {
    loadAccount();
})

function loadAccount() {
    let temp = localStorage.getItem('login') != null ? localStorage.getItem('login').split(';') : '0'
    if (temp[0] == '1') {
        navBar.classList.add('active')
        document.querySelector('#username').textContent = temp[1]
    }
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('login')
    window.location.href = "./index.html";
})