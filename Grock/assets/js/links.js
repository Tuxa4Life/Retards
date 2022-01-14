const home = document.querySelector('#home')
const search = document.querySelector('#search')
const profile = document.querySelector('#profile')
const history = document.querySelector('#history')
const info = document.querySelector('.info-btn')

home.addEventListener(
    'click', function () {
        window.location.href = '../../index.html'
    }
)

search.addEventListener(
    'click', function () {
        window.location.href = '../../search.html'
    }
)

profile.addEventListener(
    'click', function () {
        if (loginState == true) {
            toggleLogin ()
        } else {
            window.location.href = '../../profile.html'
        }
    }
)

history.addEventListener (
    'click', function () {
        window.location.href = '../../history.html'
    }
)


// some functions 
let loginCardState = false
let toggleLogin = () => {
    loginCardState = !loginCardState
    if (loginCardState) {
        showLoginCard ()
    } else {
        hideLoginCard ()
    }
}

let showLoginCard = () => {
    background = document.createElement('div') // creating background for menu
    document.body.appendChild(background)
    background.classList.add('pBackground')
    
    let menu = document.createElement('div') // creating menu
    background.appendChild(menu)
    menu.className = 'profileMenu'

    menu.innerHTML = `
        <div class="info">
            <h2>${user_values.username}</h2>
            <p>${user_values.email}</p>
            <h6 class="logOutBtn">Log Out</h6>
        </div>
        <div class="buttons">
            <button class="closeBtn">Close</button>
        </div>
    `
    let closeBtn = document.querySelector('.closeBtn')
    closeBtn.addEventListener('click', toggleLogin)

    document.querySelector('.logOutBtn').addEventListener (
        'click', function () {
            loginState = false
            loginState = JSON.parse(localStorage.setItem('loginState', loginState))
        }
    )
}

let hideLoginCard = () => {
    let el = document.querySelector('.pBackground')
    el.remove ()
}