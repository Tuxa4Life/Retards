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
        loadValues ()
        posts = document.querySelectorAll('.post')
        for (i = 0; i < filterers.length; i++) {
            for (let j = 0; j < posts.length; j++) {
                if (item.getAttribute('class') == 'None') {
                    window.location.reload ()
                } else if (item.getAttribute('class') != posts[j].getAttribute('data-category')) {
                    posts[j].remove ()
                }
            }
        }
    }
))