let loadFavPosts = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].favourite == true) {
            let post = document.createElement('div')
            document.querySelector('.favourite-posts-container').appendChild(post)
            post.classList.add('fav-post')
            post.classList.add('card')
            post.setAttribute('data-id', arr[i].id)
            post.setAttribute('data-category', arr[i].category)
            post.innerHTML = `
                <h2 class="header">${arr[i].header}</h2>
                <img class="post-img" src="${arr[i].url}">
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
