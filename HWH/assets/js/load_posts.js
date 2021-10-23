let arr

let loadPosts = () => {
    arr = JSON.parse(localStorage.getItem('values'))
}

loadPosts ()