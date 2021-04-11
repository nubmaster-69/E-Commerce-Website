const users = [
    {
        username: 'harry123',
        password: 'Harry123',
        profileName: 'Tieu Linh'
    }
]

const backToHomePage = document.querySelector('#back-to-homepage');

const usernameLogin = document.querySelector('#username');
const passLogin = document.querySelector('#password');
const btnLogin = document.querySelector('#btnLogin');
const showPassLogin = document.querySelector('#sp-login');

const usernameSignup = document.querySelector('#username-signup');
const passSignup = document.querySelector('#password-signup');
const btnSignup = document.querySelector('#btnSignup');
const showPassSignup = document.querySelector('#sp-signup');
const confirmPass = document.querySelector('#password-confirm');


backToHomePage.addEventListener('click', () => {
    window.location.href = "./index.html";
});

showPassLogin.addEventListener('click', () => {
    if (passLogin.getAttribute('type') === "password") {
        passLogin.setAttribute('type', 'text')
        showPassLogin.classList.replace('fa-eye-slash', 'fa-eye')
    }
    else {
        passLogin.setAttribute('type', 'password')
        showPassLogin.classList.replace('fa-eye', 'fa-eye-slash')
    }
});

showPassSignup.addEventListener('click', () => {
    if (passSignup.getAttribute('type') === "password") {
        passSignup.setAttribute('type', 'text')
        showPassSignup.classList.replace('fa-eye-slash', 'fa-eye')
    }
    else {
        passSignup.setAttribute('type', 'password')
        showPassSignup.classList.replace('fa-eye', 'fa-eye-slash')
    }
});

btnLogin.addEventListener('click', () => {
    let userName = usernameLogin.value;
    let pass = passLogin.value;
    let parentElem = passLogin.parentElement.parentElement;
    let parentUserElem = usernameLogin.parentElement.parentElement;

    let isCorrectPass = users.some((user) => {
        return user.password === pass;
    })

    let isCorrectUserName = users.some((user) => {
        return user.username === userName;
    })


    if (userName === '') {
        parentUserElem.classList.add('raise-error');
        parentUserElem.lastElementChild.innerText = 'Please fill in this field!';
    }
    else if (!isCorrectUserName) {
        parentUserElem.classList.add('raise-error');
        parentUserElem.lastElementChild.innerText = 'Username not found!';
    }
    else {
        parentUserElem.classList.remove('raise-error');
        parentUserElem.lastElementChild.innerText = '';
    }


    if (pass === '') {
        parentElem.classList.add('raise-error');
        parentElem.lastElementChild.innerText = 'Please fill in this field!';
    }
    else if (!isCorrectPass) {
        parentElem.classList.add('raise-error');
        parentElem.lastElementChild.innerText = 'Incorrect Password!';
    }
    else {
        parentElem.classList.remove('raise-error');
        parentElem.lastElementChild.innerText = '';
        window.location.href = `./index.html?account=${users[0]['profileName']}`;
    }
});

passSignup.addEventListener('blur', () => {
    let pass = passSignup.value;
    let passwordRegex = /(?=.*\d)(?=.*[A-Z])(?=\S+$).{8}/

    let parentElem = passSignup.parentElement.parentElement;

    if (pass === '') {
        parentElem.classList.add('raise-error')
        parentElem.lastElementChild.innerText = "Please fill in this field!"
    }
    else if (!passwordRegex.test(pass)) {
        parentElem.classList.add('raise-error')
        parentElem.lastElementChild.innerText = 'At least 8 characters, a digit and an uppercase'
    }
    else {
        parentElem.classList.remove('raise-error')
        parentElem.lastElementChild.innerText = ''
    }
});

confirmPass.addEventListener('blur', () => {
    let pass = passSignup.value;
    let cfPass = confirmPass.value;

    let parentElem = confirmPass.parentElement.parentElement;

    if (cfPass === '') {
        parentElem.classList.add('raise-error')
        parentElem.lastElementChild.innerText = "Please fill in this field!";
    }
    else if (pass != cfPass) {
        parentElem.classList.add('raise-error')
        parentElem.lastElementChild.innerText = "Password doesn't match!";
    }
    else {
        parentElem.classList.remove('raise-error')
        parentElem.lastElementChild.innerText = "";
    }
});

usernameSignup.addEventListener('blur', () => {
    let userName = usernameSignup.value;
    let parentElem = usernameSignup.parentElement.parentElement;

    if (userName === '') {
        parentElem.classList.add('raise-error');
        parentElem.lastElementChild.innerText = 'Please fill in this field!';
    }
    else {
        parentElem.classList.remove('raise-error');
        parentElem.lastElementChild.innerText = '';
    }
});