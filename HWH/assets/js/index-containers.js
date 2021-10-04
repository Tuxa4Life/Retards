const $main = document.querySelector('#main')

let loadRegister_popup = () => {
    if (localStorage.getItem('loginState') != 'true') {
        let RegisterDiv = document.createElement('div')
        $main.appendChild(RegisterDiv)
        RegisterDiv.className = 'register-popup card'

        RegisterDiv.innerHTML = `
            <h1>Welcome To HWH</h1>
            <div class="create-div">
                <h2>Register To Start</h3>
                <button class="reg-btn">Create an Account</button>
            </div>
            <div class="login-div">
                <span>Already Registered? Then Log in!</span>
                <button class="log-btn">Log In</button>
            </div>
        `

        document.querySelector('.reg-btn').addEventListener('click', registerBtnRedirect)
        document.querySelector('.log-btn').addEventListener('click', loginbtnAction)
    }
}

let registerBtnRedirect = () => window.location.href = 'register.html'
let loginbtnAction = () => profileStateChange ()

loadRegister_popup ()