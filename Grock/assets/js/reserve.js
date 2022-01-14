const $R_menuBtn = document.querySelector('.reserveMenu-btn')

let R_State = false
let toggleRState = () => {
    R_State = !R_State
    if (R_State == true) {
        openRMenu ()
    } else {
        hideRMenu ()
    }
}

let arr

if (localStorage.getItem('bookedHotels')) {
    arr = booked_hotels
} else {
    arr = []
}

let $firstDate 
let $secondDate 
let $personalID 
let $id = document.querySelector('#hotel_id').textContent.toString ()
let $hotelName = document.querySelector('h1').textContent

let openRMenu = () => {
    background = document.createElement('div') // creating background for menu
    document.body.appendChild(background)
    background.classList.add('rBackground')
    
    let menu = document.createElement('div') // creating menu
    background.appendChild(menu)
    menu.className = 'reserveMenu'

    menu.innerHTML = `
        <label for="start">From:</label>
        <input type="date" name="start" id="startDate">

        <label for="end">To:</label>
        <input type="date" name="end" id="endDate">

        <input type="number" placeholder="Personal ID">

        <div class="button-wrapper">
            <button class="reserve-btn">Reserve</button>
            <button class="r_cancel">Cancel</button>
        </div>
    `
    document.querySelector('.r_cancel').addEventListener('click', toggleRState)
        
        
    // main stuff
    $firstDate = document.querySelector('#startDate')
    $secondDate = document.querySelector('#endDate')
    $personalID = document.querySelector('[placeholder="Personal ID"]')
    
    document.querySelector('.reserve-btn').addEventListener('click', reserve)
}

let hideRMenu = () => {
    let el = document.querySelector('.rBackground')
    el.remove ()
}

let reserveValues = {
    hotel: $hotelName,
    from: '',
    to: '',
    personalID: '',
    id: $id,
    resiptID: Math.floor(Math.random() * Date.now()),
}

let reserve = () => {
    reserveValues.from = $firstDate.value
    reserveValues.to = $secondDate.value
    reserveValues.personalID = $personalID.value
    
    arr.unshift(reserveValues)
    let tmpRVals = JSON.stringify(arr)
    localStorage.setItem('bookedHotels', tmpRVals)

    toggleRState ()
}

$R_menuBtn.addEventListener('click', toggleRState)
