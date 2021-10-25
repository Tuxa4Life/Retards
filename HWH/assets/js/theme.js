const $themeBtn1 = document.querySelector('.theme-btn1')
const $themeBtn2 = document.querySelector('.theme-btn2')

let tMenuState = false

let tMenuStateChange = () => {
    tMenuState = !tMenuState
    tMenuState == true ? openTMENU () : closeTMENU ()
}

let Tbackground 
let Tmenu
let themeState = true
let tmpSwitch = true

let toggleTheme = () => {
    themeState = !themeState
    themeState == true ? $body.classList.remove('light') : $body.classList.add('light') 
}
let logo = document.querySelector('.logo-img')

let openTMENU = () => {
    Tbackground = document.createElement('div') // creating background for menu
    $body.appendChild(Tbackground)
    Tbackground.classList.add('tBackground')

    Tmenu = document.createElement('div') // creating menu
    Tbackground.appendChild(Tmenu)
    Tmenu.classList.add('card')
    Tmenu.classList.add('themeMenu')

    Tmenu.innerHTML = `
        <div class="tinput-holder light-holder">
            <input name="lightOne" class="light-input" type="checkbox">
            <label for="lightOne">Light Mode</label>
        </div>
        <div class="tinput-holder dark-holder">
            <input checked name="darkOne" class="dark-input" type="checkbox">
            <label for="darkOne">Dark Mode</label>
        </div>
        <div class="buttons">
            <button class="tCloseBtn">Close</button>
        </div>
    `

    let darkC = document.querySelector('.dark-input')
    let darkH = document.querySelector('.dark-holder')
    let lightC = document.querySelector('.light-input')
    let lightH = document.querySelector('.light-holder')
    
    if (localStorage.getItem('theme') == 'light') {
        check (lightC)
        uncheck (darkC)
    } else {
        uncheck (lightC)
        check (darkC)
    }

    document.querySelector('.tCloseBtn').addEventListener ('click', tMenuStateChange)

    let CC = () => {
        tmpSwitch = !tmpSwitch
        if (tmpSwitch == false) {
            uncheck (darkC)
            check (lightC)
            toggleTheme ()
            localStorage.setItem('theme', 'light')
            logo.setAttribute('src', 'assets/images/logo-dark-transp.png')
        } else {
            uncheck (lightC)
            check (darkC)
            toggleTheme ()
            localStorage.setItem('theme', 'dark')
            logo.setAttribute('src', 'assets/images/logo-light-transp.png')
        }
    }

    darkH.addEventListener('click', CC)
    lightH.addEventListener('click', CC)
}

let closeTMENU = () => {
    let el = document.querySelector('.tBackground')
    el.remove ()
}

let check = (element) => {
    element.checked = true
}

let uncheck = (element) => {
    element.checked = false
}

$themeBtn1.addEventListener('click', tMenuStateChange)
$themeBtn2.addEventListener('click', tMenuStateChange)

let loadTheme = () => {
    if (localStorage.getItem('theme') == 'light') {
        $body.classList.add('light')
        logo.setAttribute('src', 'assets/images/logo-dark-transp.png')
    } else {
        $body.classList.remove('light')
        logo.setAttribute('src', 'assets/images/logo-light-transp.png')
    }
}

window.addEventListener('load', loadTheme)