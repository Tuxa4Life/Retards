const $p_up = document.querySelector('.p-up')
const $p_down = document.querySelector('.p-down')
const $recentPostContainer = document.querySelector('.recent-posts-container')

let p_containerState = true

let changePCState = () => {
    p_containerState = !p_containerState
    if (p_containerState == true) {
        $recentPostContainer.style.display= $p_up.style.display = 'flex'
        $p_down.style.display = 'none'
    } else {
        $recentPostContainer.style.display= $p_up.style.display = 'none'
        $p_down.style.display = 'flex'
    }
}

$p_up.addEventListener('click', changePCState)
$p_down.addEventListener('click', changePCState)

// register popup
const $register_popup = document.querySelector('.register-popup')
const $popupRegBtn = document.querySelector('.reg-btn')
const $popupLogBtn = document.querySelector('.log-btn')
const $indexPosts = document.querySelector('.posts')

if (localStorage.getItem('loginState') == 'true') {
    $register_popup.style.display = 'none'
    $indexPosts.style.display = 'flex'
} else {
    $register_popup.style.display = 'flex'
    $indexPosts.style.display = 'none'
}

$popupRegBtn.addEventListener (
    'click', function () {
        window.location.href = 'register.html'
    }
)

$popupLogBtn.addEventListener (
    'click', function () {
        profileStateChange ()
    }
)

// fav side funcs
const $fpUp = document.querySelector('.fp-up')
const $fpDown = document.querySelector('.fp-down')
const $favPostContainer = document.querySelector('.favourite-posts-container')

let FCState = false
let changeFCState = () => {
    FCState = !FCState
    if (FCState == true) {
        $favPostContainer.style.display = $fpUp.style.display = 'flex'
        $fpDown.style.display = 'none'
    } else {
        $favPostContainer.style.display = $fpUp.style.display = 'none'
        $fpDown.style.display = 'flex'
    }
}

$fpUp.addEventListener('click', changeFCState)
$fpDown.addEventListener('click', changeFCState)