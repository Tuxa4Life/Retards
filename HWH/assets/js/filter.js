const $filterBtn = document.querySelector('.filter-btn')
const $filterMenu = document.querySelector('.filter-list')

let filterStatus = false

let changeFilterStatus = () => {
    filterStatus = !filterStatus
    if (filterStatus == true) {
        $filterMenu.style.display = 'flex'
    } else {
        $filterMenu.style.display = 'none'
    }
}
$filterBtn.addEventListener('click', changeFilterStatus)
$filterMenu.addEventListener('click', changeFilterStatus)

let filterers = document.querySelectorAll('.filter-ul li')
let posts = document.querySelectorAll('.post')

filterers.forEach(item => item.addEventListener (
    'click', function () {
        posts = document.querySelectorAll('.post')
        for (let j = 0; j < posts.length; j++) {
            posts[j].style.display = 'none'
            if (item.getAttribute('class') == 'None') {
                posts[j].style.display = 'flex'
            } else if (item.getAttribute('class') == posts[j].getAttribute('data-category')) {
                posts[j].style.display = 'flex'
            } else if (item.textContent == 'Favourite' && posts[j].children[3].children[0].getAttribute('src') == 'assets/icons/star-filled.svg') {
                posts[j].style.display = 'flex'
            }
        }
    }
))