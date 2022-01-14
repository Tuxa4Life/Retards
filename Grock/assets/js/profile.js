const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const back_btn = document.querySelector('.back-btn')

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    back_btn.style.color = 'rgb(43, 110, 4)'
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
    back_btn.style.color = 'white'
});


// register stuff
const $usernameInput = document.querySelector('.username-input')
const $emailInput = document.querySelector('.email-input')
const $passwordInput = document.querySelector('.password-input')
const $numberInput = document.querySelector('.number-input')
const $signUpBtn = document.querySelector('.signup-btn')

let values = {
    username: '',
    email: '',
    password: '',
    number: '',
}

let getValues = () => {
    values.username = $usernameInput.value
    values.email = $emailInput.value
    values.password = $passwordInput.value
    values.number = $numberInput.value
}

let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let passwordFilter = /^[A-Za-z]\w{7,20}$/

let state = false
let register = () => {
    getValues ()

    if (values.email.match(emailFilter) && values.password.match(passwordFilter)) {
        state = true
    } else {
        alert('Please check inputs, email or password might be incorrect')
    }
    
    if (state) {
        let tmp = JSON.stringify(values)
        localStorage.setItem('user', tmp)
        localStorage.setItem('loginState', true)
        
        window.location.href = '../../index.html'
    }

}

$signUpBtn.addEventListener('click', register)


// login
const $l_emailInput = document.querySelector('.l_emailInput')
const $l_passwordInput = document.querySelector('.l_passwordInput')
const $loginBtn = document.querySelector('.loginBtn')

let loginValues = {
    email: '',
    password: '',
}

let getLoginValues = () => {
    loginValues.email = $l_emailInput.value
    loginValues.password = $l_passwordInput.value
}

let login = () => {
    getLoginValues ()
    if (loginValues.email == user_values.email && loginValues.password == user_values.password) {
        loginState = true
        loginState = JSON.parse(localStorage.setItem('loginState', loginState))
        window.location.href = '../../index.html'
    } else {
        loginState = false
        loginState = JSON.parse(localStorage.setItem('loginState', loginState))
        alert('Please check inputs, email or password might be incorrect')
    }

}

$loginBtn.addEventListener('click', login)