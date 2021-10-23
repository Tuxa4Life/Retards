const $main = document.querySelector('#main')

let loadRegister_popup = () => {
    if (localStorage.getItem('loginState') != 'true') {
        let RegisterDiv = document.createElement('div')
        $main.appendChild(RegisterDiv)
        RegisterDiv.className = 'register-popup card'

        RegisterDiv.innerHTML = `
            <h1>Welcome To HWH</h1>
            <div class="create-div">
                <h2>Register To Start</h3>
                <button class="reg-btn">Create an Account</button>
            </div>
            <div class="login-div">
                <span>Already Registered? Then Log in!</span>
                <button class="log-btn">Log In</button>
            </div>
        `

        document.querySelector('.reg-btn').addEventListener('click', registerBtnRedirect)
        document.querySelector('.log-btn').addEventListener('click', loginbtnAction)
    }
}

let registerBtnRedirect = () => window.location.href = 'register.html'
let loginbtnAction = () => profileStateChange ()

let loadRecentContainer = () => {
    let recentContainer = document.createElement('div')
    $main.appendChild(recentContainer)
    recentContainer.className = 'posts recent-posts'

    recentContainer.innerHTML = `
        <h1><img src="assets/icons/clock.svg" alt=""> Recent Posts <img class="p-up" src="assets/icons/chevron-up.svg" alt="+"></h1>
        <div class="recent-posts-container"></div>
    `
    document.querySelector('.p-up').addEventListener('click', changeRecentState)

    if (arr) {
        let starBtn
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
                document.querySelector('.recent-posts-container').appendChild(post)
                post.classList.add('post')
                post.innerHTML = `
                    <h2 class="header">${arr[i].header}</h2>
                    <img class="post-img" src="${arr[i].url}">
                    <p class="text">${arr[i].text}</p>
                    <div class="extra">
                        <img data-fav-id="${arr[i].id}" class="fav-icon" src="${arr[i].star_pic}">
                        <p>${arr[i].date}</p>
                        <p>${arr[i].author}</p>
                    </div>
                    <p class="type">${arr[i].category}</p>
                `

                starBtn = document.querySelectorAll('.fav-icon')
            }
        }
        
        starBtn = document.querySelectorAll('.fav-icon')

        starBtn.forEach(item => item.addEventListener (
            'click', function () {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].id == item.getAttribute('data-fav-id')) {
                        if (arr[i].favourite == false) {
                            arr[i].favourite = true
                            let tmp = JSON.stringify(arr)
                            localStorage.setItem('values', tmp)
                            window.location.reload ()
                        } else {
                            arr[i].favourite = false
                            let tmp = JSON.stringify(arr)
                            localStorage.setItem('values', tmp)
                            window.location.reload ()
                        }
                    }
                }
            }
        ))
    }
}

let recentContainerState = true
let changeRecentState = () => {
    recentContainerState = !recentContainerState
    if (recentContainerState == false) {
        document.querySelector('.recent-posts-container').style.display = 'none'
        document.querySelector('.p-up').classList.remove('arrow-close')
        document.querySelector('.p-up').classList.add('arrow-open')
    } else {
        document.querySelector('.recent-posts-container').style.display = 'flex'
        document.querySelector('.p-up').classList.remove('arrow-open')
        document.querySelector('.p-up').classList.add('arrow-close')
    }
}

let loadFavContainer = () => {
    let favContainer = document.createElement('div')
    $main.appendChild(favContainer)
    favContainer.className = 'posts fav-posts'

    favContainer.innerHTML = `
        <h1><img src="assets/icons/star-filled.svg" alt=""> Favourite Posts <img class="fp-up" src="assets/icons/chevron-up.svg" alt="+"></h1>
        <div class="favourite-posts-container"></div>
    `

    loadFavPosts ()

    document.querySelector('.fp-up').addEventListener('click', changeFavState)

}

let favContainerState = true
let changeFavState = () => {
    favContainerState = !favContainerState
    if (favContainerState == false) {
        document.querySelector('.favourite-posts-container').style.display = 'none'
        document.querySelector('.fp-up').classList.remove('arrow-close')
        document.querySelector('.fp-up').classList.add('arrow-open')
    } else {
        document.querySelector('.favourite-posts-container').style.display = 'flex'
        document.querySelector('.fp-up').classList.remove('arrow-open')
        document.querySelector('.fp-up').classList.add('arrow-close')
    }
}
