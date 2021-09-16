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