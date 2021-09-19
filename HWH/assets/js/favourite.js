let loadFavPosts = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].favourite == true) {
            let post = document.createElement('div')
            $favPostContainer.appendChild(post)
            post.classList.add('fav-post')
            post.setAttribute('data-id', arr[i].id)
            post.setAttribute('data-category', arr[i].category)
            post.innerHTML = `
                <h2 class="header">${arr[i].header}</h2>
                <p class="text">${arr[i].text}</p>
                <div class="extra">
                    <img data-fav-id="${arr[i].id}" class="fav-icon" src="assets/icons/star-filled.svg">
                    <p>${arr[i].date}</p>
                    <p>${arr[i].author}</p>
                </div>
                <p class="type">${arr[i].category}</p>
            `
        }
    }
}

window.addEventListener('load', loadFavPosts)