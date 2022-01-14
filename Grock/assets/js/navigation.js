const $MenuBtn = document.querySelector('.menu-btn img')
const $Menu = document.querySelector('.navigation')
const $extendedText = document.querySelectorAll('.extended-text')

let menuState = false
let toggleMenu = () => {
    menuState = !menuState
    if (menuState == true) {
        openMenu ()
    } else {
        closeMenu ()
    }
}

let openMenu = () => {
    $Menu.classList.remove('shrinked')
    $Menu.classList.add('expanded')

    $extendedText.forEach(function(text) {
        text.style.display = 'block'
    })

    $Menu.children[0].children[0].style.width = '90%'

    setTimeout(function () {
  
        $extendedText.forEach(function(text) {
            text.style.opacity = 1
        })
                  
    }, 300)
}

let closeMenu = () => {
    $Menu.classList.remove('expanded')
    $Menu.classList.add('shrinked')

    setTimeout(function () {
        $extendedText.forEach(function(text) {
            text.style.opacity = 0
        })
    }, 300)

    $extendedText.forEach(function(text) {
        text.style.display = 'none'
    })
}

$MenuBtn.addEventListener('click', toggleMenu)