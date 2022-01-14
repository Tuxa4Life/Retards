const $cardWrapper = document.querySelector('.container')

let hotels = [
    {
        name: 'Aparthotel Alfa',
        stars: 5,
        city: 'Ureki',
        adress: 'ekvtime tayaishvili',
        rooms: 3,
        src: 'assets/images/Aparthotel sea view.jpg',
        id: '10001', 
        wifi: true,
        parking: true,
        jacuzzi: false, 
        meal: true,
    },
    {
        name: 'Villa Edemi ',
        stars: 4,
        city: 'Tskibuli',
        adress: 'Vazha Pshavela Street 2nd turn',
        rooms: 2,
        src: 'assets/images/Villa Edemi.jpg',
        id: '10002',
        wifi: false,
        parking: false,
        jacuzzi: true, 
        meal: false,
    },
    {
        name: 'Glamping Georgia Krikhi',
        stars: 5,
        city: 'Ambrolauri',
        adress: 'Pirveli Street,Kvemo Krikhi',
        rooms: 3,
        src: 'assets/images/Glamping Georgia Krikhi.jpg',
        id: '10003',
        wifi: false,
        parking: true,
        jacuzzi: false, 
        meal: false,
    },
    {
        name: 'Sandali Hotels',
        stars: 2,
        city: 'Tbilisi',
        adress: '23 Viktor Jorbenadze Street',
        rooms: 3,
        src: 'assets/images/Sandali by Tbilisi Luxury Boutique Hotels.jpg',
        id: '10004',
        wifi: true,
        parking: false,
        jacuzzi: true, 
        meal: true,
    },
    {
        name: 'Aparthotel sea view',
        stars: 4,
        city: 'Batumi',
        adress: 'Khimshiashvili street 7',
        rooms: 2,
        src: 'assets/images/Aparthotel sea view.jpg',
        id: '10005',
        wifi: false,
        parking: true,
        jacuzzi: true, 
        meal: false,
    },
    {
        name: 'Hilltop Batumi',
        stars: 5,
        city: 'Batumi',
        adress: 'Shervashidze Ascent',
        rooms: 4,
        src: 'assets/images/Hilltop Batumi.jpg',
        id: '10006',
        wifi: true,
        parking: true,
        jacuzzi: true, 
        meal: false,
    },
    {
        name: 'Boutique Hotel Amra',
        stars: 4,
        city: 'Sokhumi',
        adress: 'Konfederatov 28',
        rooms: 2,
        src: 'assets/images/Boutique Hotel Amra.jpg',
        id: '10007',
        wifi: true,
        parking: true,
        jacuzzi: false, 
        meal: true,
    },
    {
        name: 'Jewelberry Glamping',
        stars: 5,
        city: 'Mtskheta',
        adress: 'Tsilkani, Zone 72_Sector 02, Quarter',
        rooms: 3,
        src: 'assets/images/Jewelberry Glamping.jpg',
        id: '10008', ///////////////
        wifi: true,
        parking: true,
        jacuzzi: true, 
        meal: true,
    },
    {
        name: 'Shanshe',
        stars: 4,
        city: 'Gurjaani',
        adress: '12th I turn. N 6, 1500',
        rooms: 2,
        src: 'assets/images/Aparthotel sea view.jpg',
        id: '10009', ///////////////
        wifi: true,
        parking: false,
        jacuzzi: true, 
        meal: false,
    },
    {
        name: 'Happy Stay Hotel',
        stars: 5,
        city: 'Kutaisi',
        adress: '87 Tamar Mephe Street',
        rooms: 4,
        src: 'assets/images/Aparthotel sea view.jpg',
        id: '10010',
        wifi: true,
        parking: true,
        jacuzzi: false, 
        meal: true,
    }
]

let drawCards = () => {
    hotels.map (e => {
        let card = document.createElement('div')
        $cardWrapper.appendChild(card)
        card.className = 'card'
        card.setAttribute('data-values', JSON.stringify(e))
        card.innerHTML = `
            <img src="${e.src}" alt="Image">
            <div class="details">
                <div class="top-part">
                    <h2>${e.name}</h2>
                    <span>Stars: ${e.stars}</span>
                    <h3>City: ${e.city}</h3>
                </div>
                <div class="bottom-part">
                    <p>Address: ${e.adress}</p>
                    <p>Room Count: ${e.rooms}</p>
                </div>
            </div>
        `

        card.addEventListener ('click', function () {
            window.location.href = `./pages/${e.id}.html`
        })
    })
}

drawCards ()