const $contactBtn = document.querySelector('.contact-btn')
const $contactBtn2 = document.querySelector('.contact-btn2')

let CS = false
let changeCS = () => {
    CS = !CS
    CS == true ? openContactMenu () : closeContactMenu ()
}

$contactBtn.addEventListener('click', changeCS)
$contactBtn2.addEventListener('click', changeCS)

let openContactMenu = () => {
    background = document.createElement('div') // creating background for menu
    $body.appendChild(background)
    background.classList.add('cBackground')
    
    
    menu = document.createElement('div') // creating menu
    background.appendChild(menu)
    menu.classList.add('contact-menu')
    menu.classList.add('card')
    menu.innerHTML = `
        <p>
            Contact Me Here:  
            <a  target="_blank" href="https://www.facebook.com/tuxa4life">
                <img  src="assets/icons/facebook.svg" alt="Facebook">
            </a>
            <a target="_blank" href="https://www.instagram.com/tuxa4life/">
                <img src="assets/icons/instagram.svg" alt="Instagram">
            </a>
        </p>
        <p>Email: nikoloztuxa@gmail.com</p>
        <p>Number: +995 599 752 777</p>
        <button class="c-close">Close</button>
    `
    document.querySelector('.c-close').addEventListener('click', changeCS)
}

let closeContactMenu = () => {
    let el = document.querySelector('.cBackground')
    el.remove ()
}