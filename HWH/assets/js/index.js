window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        let tmpArr = ['null']
        localStorage.setItem('values', JSON.stringify(tmpArr))
        localStorage.setItem("hasCodeRunBefore", true)
    }
}

loadPosts ()

let loadContents = () => {
    loadRegister_popup ()
    if (arr.length != 1) {
        loadFavContainer ()
        loadRecentContainer ()
    } else {
        let null_alert = document.createElement('h3')
        $main.appendChild(null_alert)
        null_alert.textContent = "There's nothing to show..."
    }
}

window.addEventListener('load', loadContents)