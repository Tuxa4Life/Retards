let $postContainer = document.querySelector('.recent-posts-container')

let arr = JSON.parse(localStorage.getItem('values'))

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
            $postContainer.appendChild(post)
            post.classList.add('post')
            post.innerHTML = `
                <h2 class="header">${arr[i].header}</h2>
                <p class="text">${arr[i].text}</p>
                <div class="extra">
                    <img data-fav-id="${arr[i].id}" class="fav-icon" src="${arr[i].star_pic}">
                    <p>${arr[i].date}</p>
                    <p>${arr[i].author}</p>
                </div>
                <p class="type">${arr[i].category}</p>
            `
        }
    }
}