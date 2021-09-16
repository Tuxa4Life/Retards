const $sidebar = document.querySelector('.sidebar')
const $background = document.querySelector('.sidebar-background')
const $sidebarBtn1 = document.querySelector('.sidebarBtn1')
const $sidebarBtn2 = document.querySelector('.sidebarBtn2')

let sidebarStatus = false 

let sStateChanger = () => {
    sidebarStatus = !sidebarStatus
    if (sidebarStatus == true) {
        $sidebar.classList.remove('close-sidebar')
        $sidebar.classList.add('open-sidebar')
        $background.classList.remove('close-sidebar-background')
        $background.classList.add('open-sidebar-background')
        $sidebarBtn2.classList.remove('close-img')
        $sidebarBtn2.classList.add('open-img')
        setTimeout(function () {$background.style.display = 'block'}, 100)
    } else {
        $sidebar.classList.remove('open-sidebar')
        $sidebar.classList.add('close-sidebar')
        $background.classList.remove('open-sidebar-background')
        $background.classList.add('close-sidebar-background')
        $sidebarBtn2.classList.remove('open-img')
        $sidebarBtn2.classList.add('close-img')
        setTimeout(function () {$background.style.display = 'none'}, 500)
    }
}

$sidebarBtn1.addEventListener('click', sStateChanger)
$sidebarBtn2.addEventListener('click', sStateChanger)
$background.addEventListener('click', sStateChanger)