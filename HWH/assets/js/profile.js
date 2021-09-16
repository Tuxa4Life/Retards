const $profileBtn = document.querySelector('.profile-btn')
const $profileBtn2 = document.querySelector('.profile-btn2')
const $body = document.querySelector('body')

let pMenuState = false

let profileStateChange = () => { // opening closing menu
    pMenuState = !pMenuState
    if (pMenuState == true) {
        openMenu ()
    } else {
        closeMenu ()
    }
}

let background
let menu

let inputValues = {
    email: '',
    password: ''
}

let openMenu = () => { // open function
    background = document.createElement('div') // creating background for menu
    $body.appendChild(background)
    background.classList.add('pBackground')

    menu = document.createElement('div') // creating menu
    background.appendChild(menu)

    if (localStorage.getItem('loginState') == "true") {
        menu.classList.add('logginedMenu')
        
        menu.innerHTML = `
            <div class="info">
                <h2>${ProfileValues.n}</h2>
                <p>${ProfileValues.e}</p>
                <h6 class="logOutBtn">Log Out</h6>
            </div>
            <span class="deleteAcc">Delete Account</span>
            <div class="buttons">
                <button class="closeBtn">Close</button>
            </div>
        `
        let closeBtn = document.querySelector('.closeBtn')
        closeBtn.addEventListener('click', profileStateChange)

        document.querySelector('.deleteAcc').addEventListener (
            'click', function () {
                closeMenu ()
                localStorage.removeItem('LS_values')
                localStorage.removeItem('loginState')
            }
        )
        document.querySelector('.logOutBtn').addEventListener (
            'click', function () {
                closeMenu ()
                localStorage.setItem('loginState', 'false')
            }
        )
    } else {
        menu.classList.add('profileMenu')

        menu.innerHTML = `
            <label for="email">Email</label>
            <input class="emailInput" type="text" placeholder="Enter your Email" name="email">
            <label for="password">Password</label>
            <input class="passInput" type="password" placeholder="Enter your Password" name="password">
            <div  class="btn-holder">
                <button class="loginButton">Login</button>
                <button class="cancelButton">Cancel</button>
            </div>
            <span>Not Registered? Register <a href="register.html">Here</a></span>
        ` // adding html for menu

        let $cancelBtn = document.querySelector('.cancelButton')
        $cancelBtn.addEventListener('click', closeMenu)

        let emailInput = document.querySelector('.emailInput')
        emailInput.addEventListener(
            'keyup', function () {
                inputValues.email = this.value
            }
        )
        let passInput = document.querySelector('.passInput')
        passInput.addEventListener(
            'keyup', function () {
                inputValues.password = this.value
            }
        )

        let loginBtn = document.querySelector('.loginButton')
        loginBtn.addEventListener('click', login)

    }
}

let closeMenu = () => { // menu closing function
    let el = document.querySelector('.pBackground')
    el.remove ()
}

$profileBtn.addEventListener('click', profileStateChange)
$profileBtn2.addEventListener('click', profileStateChange)

let login = () => {
    if (inputValues.email == ProfileValues.e && inputValues.password == ProfileValues.p) {
        localStorage.setItem('loginState', true)
        closeMenu ()
    } else {
        alert('Login Failed Please try again')
    }
}