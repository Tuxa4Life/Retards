const $container = document.querySelector('.container')
let deleteReiciptBtn
let tmpArr = []

if (localStorage.getItem('bookedHotels')) {
    booked_hotels.map (e => {
        let asset = document.createElement('div')
        $container.appendChild(asset)
        asset.className = 'asset'
        asset.innerHTML = `
            <h1>${e.hotel}</h1>
            <p>From: ${e.from}</p>
            <p>To: ${e.to}</p>
            <p>Reicipt ID: ${e.resiptID}</p>
            <span>User: ${user_values.username}</span>

            <button data-deletor="${e.resiptID}" class="deleteRR">Delete</button>
        `

        asset.addEventListener ('click', function () {
            window.location.href = `./pages/${e.id}.html`
        })
    })
    document.querySelector('.deleteRR').addEventListener (
        'click', function () {
            for (let i = 0; i < booked_hotels.length; i++) {
                if (booked_hotels[i].resiptID == this.getAttribute('data-deletor')) {
                    booked_hotels.splice(i, 1)
                }
            }
            let tmp = JSON.stringify(booked_hotels)
            localStorage.setItem('bookedHotels', tmp)

            window.location.reload()
        }
    )
}