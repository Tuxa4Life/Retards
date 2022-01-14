let user_values
let loginState
let booked_hotels

if (localStorage.getItem('user')) {
    user_values = JSON.parse(localStorage.getItem('user'))
}

if (localStorage.getItem('loginState')) {
    loginState = JSON.parse(localStorage.getItem('loginState'))
}

booked_hotels = JSON.parse(localStorage.getItem('bookedHotels'))