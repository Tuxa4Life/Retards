let $postContainer = document.querySelector('.recent-posts-container')

let arr = JSON.parse(localStorage.getItem('values'))

if (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'null') {
            null
        } else {
            let post = document.createElement('div')
            $postContainer.appendChild(post)
            post.classList.add('post')
            post.innerHTML = `
                <h2 class="header">${arr[i].header}</h2>
                <p class="text">${arr[i].text}</p>
                <div class="extra">
                    <p>${arr[i].date}</p>
                    <p>${ProfileValues.n}</p>
                </div>
            `
        }
    }
}