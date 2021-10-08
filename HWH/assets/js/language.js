const $langBtn = document.querySelector ('.language-btn')
let LMenuState = false
let LMenuStateChanger = () => {
    LMenuState = !LMenuState
    if (LMenuState == true) {
        openLMENU ()
    } else {
        document.querySelector('.LBackground').style.display = 'none'
    }
}


let openLMENU = () => {
    document.querySelector('.LBackground').style.display = 'flex'
    document.querySelector('.lang-close').addEventListener('click', LMenuStateChanger)
}

$langBtn.addEventListener('click', LMenuStateChanger)