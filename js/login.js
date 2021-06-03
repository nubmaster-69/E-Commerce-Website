const backToHomePage = document.querySelector('#back-to-homepage')

const usernameLogin = document.querySelector('#username')
const passLogin = document.querySelector('#password')
const btnLogin = document.querySelector('#btnLogin')
const showPassLogin = document.querySelector('#sp-login')

const usernameSignup = document.querySelector('#username-signup')
const passSignup = document.querySelector('#password-signup')
const btnSignup = document.querySelector('#btnSignup')
const showPassSignup = document.querySelector('#sp-signup')
const confirmPass = document.querySelector('#password-confirm')

var isValidUserName = true
var isValidPass = true
var isValidPassConfirm = true

// suppose that website already has 2 users
const users = [
    {
        username: 'harry123',
        password: '1234567A',
        accountName: 'harry123'
    },
    {
        username: 'datngo234',
        password: '1234567A',
        accountName: 'datngo234'
    }
]

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

function updateUsersAccount() {
    let temp = localStorage.getItem('signup');
    if (temp == null)
        return;

    let accounts = temp.split('-');

    accounts.forEach(account => {
        let temp = account.split(';')
        users.push({
            username: temp[0],
            password: temp[1],
            accountName: temp[0]
        })
    })
}

btnLogin.addEventListener('click', () => {

    updateUsersAccount();

    let validUserName = false, validPass = false;

    let userName = usernameLogin.value;
    let pass = passLogin.value;
    let parentElem = passLogin.parentElement;
    let parentUserElem = usernameLogin.parentElement;
    let name = '';

    let isCorrectPass = users.some((user) => {
        return user.password == pass;
    })

    let isCorrectUserName = users.some((user) => {
        return user.username === userName;
    })


    if (userName === '') {
        parentUserElem.classList.add('raise-error');
        parentUserElem.parentElement.lastElementChild.innerText = '(*) Please fill in this field!';
        validUserName = false;
    }
    else if (!isCorrectUserName) {
        parentUserElem.classList.add('raise-error');
        parentUserElem.parentElement.lastElementChild.innerText = '(*) Username not found!';
        validUserName = false;
    }
    else {
        parentUserElem.classList.remove('raise-error');
        parentUserElem.parentElement.lastElementChild.innerText = '';

        users.forEach(user => {
            if (user.username === userName)
                name = user.accountName;
        })

        validUserName = true;
    }

    if (pass === '') {
        parentElem.classList.add('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '(*) Please fill in this field!';
        validPass = false;
    }
    else if (!isCorrectPass) {
        parentElem.classList.add('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '(*) Incorrect Password!';
        validPass = false;
    }
    else {
        parentElem.classList.remove('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '';
        validPass = true;
    }

    if (validUserName && validPass) {
        localStorage.setItem('login', `1;${name}`);

        // Return to previous tab
        window.history.go(-1);
    }

});

passSignup.addEventListener('blur', () => {
    let pass = passSignup.value;
    // pass must contain a number, a uppercase latter, at least 8 characters and no whitespace allow
    let passwordRegex = /(?=.*\d)(?=.*[A-Z])(?=^\S+$).{8}/

    let parentElem = passSignup.parentElement;

    if (pass === '') {
        parentElem.classList.add('raise-error')
        parentElem.parentElement.lastElementChild.innerText = "(*) Please fill in this field!"
        isValidPass = false;
    }
    else if (!passwordRegex.test(pass)) {
        parentElem.classList.add('raise-error')
        parentElem.parentElement.lastElementChild.innerText = '(*) Password must at least 8 characters, contain a digit and an uppercase'
        isValidPass = false;
    }
    else {
        parentElem.classList.remove('raise-error')
        parentElem.parentElement.lastElementChild.innerText = ''
        isValidPass = true;
    }
});

confirmPass.addEventListener('blur', () => {
    let pass = passSignup.value;
    let cfPass = confirmPass.value;

    let parentElem = confirmPass.parentElement;

    if (cfPass === '') {
        parentElem.classList.add('raise-error')
        parentElem.parentElement.lastElementChild.innerText = "(*) Please fill in this field!";
        isValidPassConfirm = false;
    }
    else if (pass != cfPass) {
        parentElem.classList.add('raise-error')
        parentElem.parentElement.lastElementChild.innerText = "(*) Password doesn't match!";
        isValidPassConfirm = false;
    }
    else {
        parentElem.classList.remove('raise-error')
        parentElem.parentElement.lastElementChild.innerText = "";
        isValidPassConfirm = true;
    }
});

usernameSignup.addEventListener('blur', () => {
    let userName = usernameSignup.value;
    let parentElem = usernameSignup.parentElement;

    // Only letters and digits are allowed, at least 4, at most 8 character
    let userNameRegex = /(?=^\S+$)([A-Za-z0-9]){5,8}$/

    let userNames = []
    for (user of users)
        userNames.push(user.username);

    let temp = [];
    if (localStorage.getItem('signup') != null)
        temp = localStorage.getItem('signup').split('-');

    for (i of temp)
        userNames.push(i.split(';')[0]);

    let isExistsUserName = false;

    for (i of userNames)
        if (userName == i) {
            isExistsUserName = true;
            break;
        }

    if (userName === '') {
        parentElem.classList.add('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '(*) Please fill in this field!';
        isValidUserName = false;
    }
    else if (!userNameRegex.test(userName)) {
        parentElem.classList.add('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '(*) Username must at least 5 letters and no special characters allowed'
        isValidUserName = false;
    }
    else if (isExistsUserName) {
        parentElem.classList.add('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '(*) Username already existed!';
        isValidUserName = false;
    }
    else if (!isExistsUserName) {
        parentElem.classList.remove('raise-error');
        parentElem.parentElement.lastElementChild.innerText = '';
        isValidUserName = true;
    }
});

btnSignup.addEventListener('click', () => {
    [usernameSignup, passSignup, confirmPass].forEach(i => {
        i.focus();
        i.blur();
    })

    if (isValidUserName && isValidPass && isValidPassConfirm) {
        let temp = localStorage.getItem('signup');
        if (temp == null)
            localStorage.setItem('signup', `${usernameSignup.value};${passSignup.value}`)
        else
            localStorage.setItem('signup', `${temp}-${usernameSignup.value};${passSignup.value}`)

        localStorage.setItem('login', `1;${usernameSignup.value}`);

        // Return to previous tab
        window.history.go(-1);
    }
})