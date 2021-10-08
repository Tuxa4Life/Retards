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