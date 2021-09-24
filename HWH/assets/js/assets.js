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
    id: '',
    favourite: false,
    star_pic : '',
}

let arr = JSON.parse(localStorage.getItem('values'))

let loadValues = () => {
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 'null') {
                null
            } else {
                if (arr[i].favourite == true) {
                    arr[i].star_pic = 'assets/icons/star-filled.svg'
                } else {
                    arr[i].star_pic = 'assets/icons/star-outline.svg'
                }
                
                let post = document.createElement('div')
                $place.appendChild(post)
                post.classList.add('post')
                post.setAttribute('data-id', arr[i].id)
                post.setAttribute('data-category', arr[i].category)
                post.innerHTML = `
                    <img data-delete="${arr[i].id}" class="delete-post-btn" src="assets/icons/trash.svg" alt="X">
                    <h2 class="header">${arr[i].header}</h2>
                    <p class="text">${arr[i].text}</p>
                    <div class="extra">
                        <img data-fav-id="${arr[i].id}" class="fav-icon" src="${arr[i].star_pic}">
                        <p>${arr[i].date}</p>
                        <p>${arr[i].author}</p>
                    </div>
                    <p class="type">${arr[i].category}</p>
                `

                let deleteBtn = document.querySelectorAll('.delete-post-btn')
                
                deleteBtn.forEach(item => item.addEventListener (
                    'click', function () {
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i].id == item.getAttribute('data-delete')) {
                                arr.splice(i, 1)
                                let tmp = JSON.stringify(arr)
                                localStorage.setItem('values', tmp)
                                window.location.reload ()
                            }
                        }
                    }
                ))

                document.querySelectorAll('.fav-icon').forEach(item => item.addEventListener (
                    'click', function () {
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i].id == item.getAttribute('data-fav-id')) {
                                arr[i].favourite = true
                                let tmp = JSON.stringify(arr)
                                localStorage.setItem('values', tmp)
                                window.location.reload ()
                            }
                        }
                    }
                ))
            }
        }
    }
}

window.addEventListener('load', loadValues)

let getValue = () => {
    let date = new Date().toLocaleDateString ()
    let idNumber = Math.floor(Math.random (1000000 - 100000) * 1000000)

    values.id = idNumber
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