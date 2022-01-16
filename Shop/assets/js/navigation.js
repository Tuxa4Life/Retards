const $navBtn = document.querySelector('.menu-btn')
const $nav = document.querySelector('nav')

let navState = false
let toggleNav = () => {
    navState = !navState
    if (navState == true) {
        $nav.className = 'opened'
    } else {
        $nav.className = 'closed'
    }
}

$navBtn.addEventListener ('click', toggleNav)