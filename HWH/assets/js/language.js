let $langBtn = document.querySelector ('.language-btn')
let $langBtn2 = document.querySelector ('.language-btn2')
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
$langBtn2.addEventListener('click', LMenuStateChanger)