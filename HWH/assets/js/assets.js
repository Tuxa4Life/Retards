let kickGuest = () => {
    if (localStorage.getItem('loginState') != 'true') {
        alert('Need to be Logged in')
        window.history.back ()
    }
}

window.addEventListener('load', kickGuest)
window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        let tmpArr = ['null']
        localStorage.setItem('values', JSON.stringify(tmpArr))
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

// opening closing menu
const $uploadBtn = document.querySelector('.upload-btn')
const $cancelBtn = document.querySelector('.cancel-button')
const $CM = document.querySelector('.create-background')

let openCM = () => $CM.style.display = 'flex'
let closeCM = () => {
    $CM.style.display = 'none'
    $headerInput.value = null
    $textInput.value = null
}

$uploadBtn.addEventListener('click', openCM)
$cancelBtn.addEventListener('click', closeCM)

// posting 
const $headerInput = document.querySelector('.headerbox')
const $textInput = document.querySelector('.textbox')
const $postBtn = document.querySelector('.post-btn')
const $place = document.querySelector('.post-place')
const $selector = document.querySelector('.selector')

let values = {
    author: ProfileValues.n,
    header: '',
    text: '',
    date: '',
    category: $selector.value,
}

let arr = JSON.parse(localStorage.getItem('values'))

let loadValues = () => {
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 'null') {
                null
            } else {
                let post = document.createElement('div')
                $place.appendChild(post)
                post.classList.add('post')
                post.setAttribute('data-category', arr[i].category)
                post.innerHTML = `
                    <h2 class="header">${arr[i].header}</h2>
                    <p class="text">${arr[i].text}</p>
                    <div class="extra">
                        <p>${arr[i].date}</p>
                        <p>${arr[i].author}</p>
                    </div>
                    <p class="type">${arr[i].category}</p>
                `
            }
        }
    }
}

window.addEventListener('load', loadValues)

let getValue = () => {
    let date = new Date().toLocaleDateString ()

    values.header = $headerInput.value
    values.text = $textInput.value
    values.date = date
}

$selector.addEventListener(
    'change', function () {
        values.category = this.value
    }
)

let createPost = () => {
    getValue ()
    closeCM ()
    
    arr.push(values)
    let tmp = JSON.stringify(arr)
    localStorage.setItem('values', tmp)

    location.reload ()
}

$postBtn.addEventListener('click', createPost)