const $regionSelector = document.querySelector('#regionSelector')
const $rooms = document.querySelector('[name="rooms"]')
const $stars = document.querySelector('[name="stars"]')
const $wifi = document.querySelector('[name="wifi"]')
const $parking = document.querySelector('[name="parking"]')
const $jacuzzi = document.querySelector('[name="jacuzzi"]')
const $meal = document.querySelector('[name="free-meal"]')
const $filterBtn = document.querySelector('.filter-btn')

let cards = document.querySelectorAll('.card')

let filterValues = {
    region: '',
    rooms: '',
    stars: '',
    wifi: '',
    parking: '',
    jacuzzi: '',
    meal: '',
}

let getValues = () => {
    filterValues.region = $regionSelector.value
    filterValues.rooms = $rooms.value
    filterValues.stars = $stars.value
    if ($wifi.checked) {
        filterValues.wifi = true
    } else {
        filterValues.wifi = false
    }
    if ($parking.checked) {
        filterValues.parking = true
    } else {
        filterValues.parking = false
    }
    if ($jacuzzi.checked) {
        filterValues.jacuzzi = true
    } else {
        filterValues.jacuzzi = false
    }
    if ($meal.checked) {
        filterValues.meal = true
    } else {
        filterValues.meal = false
    }

    console.log(filterValues)
}

let deleteAllCards = () => {
    cards = document.querySelectorAll('.card')

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none'
    }
}

let showAllCards = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'flex'
    }
}

let showFilteredCards = () => {
    for (let i = 0; i < cards.length; i++) {
        let tmp = cards[i].getAttribute('data-values')
        let info = JSON.parse(tmp)
        if (filterValues.region != 'null') {
            if (info.city == filterValues.region && info.stars >= filterValues.stars && info.rooms >= filterValues.rooms && info.wifi == filterValues.wifi && info.jacuzzi == filterValues.jacuzzi && info.parking == filterValues.parking && info.meal == filterValues.meal) {
                cards[i].style.display = 'flex'
            }
        } else {
            if (info.stars >= filterValues.stars && info.rooms >= filterValues.rooms && info.wifi == filterValues.wifi && info.jacuzzi == filterValues.jacuzzi && info.parking == filterValues.parking && info.meal == filterValues.meal) {
                cards[i].style.display = 'flex'
            }
        }
    }
}

let onClickHandler = () => {
    getValues ()
    deleteAllCards ()
    showFilteredCards ()
}

$filterBtn.addEventListener('click', onClickHandler)
document.querySelector('.reset-btn').addEventListener('click', function () {
    showAllCards ()
})