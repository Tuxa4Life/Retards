const $eye = document.querySelector('.eye')
const $passInput = document.querySelector('.passwordInput')

let inputStatus = false

let changeInputStatus = () => {
    inputStatus = !inputStatus
    if (inputStatus == true) {
        $passInput.setAttribute('type', 'text')
        $eye.setAttribute('src', 'assets/icons/eye-crossed.svg')
    } else {
        $passInput.setAttribute('type', 'password')
        $eye.setAttribute('src', 'assets/icons/eye.svg')
    }
}

$eye.addEventListener('click', changeInputStatus)

// main mechanic
const $ni = document.querySelector('.ni')
const $ei = document.querySelector('.ei')
const $pi = document.querySelector('.pi')
const $rpi = document.querySelector('.rpi')

const $btn = document.querySelector('.regBtn')

let values = {
    n: '',
    e: '',
    p: '',
    rp: ''
}

let niVal = () => values.n = $ni.value
let eiVal = () => values.e = $ei.value
let piVal = () => values.p = $pi.value
let rpiVal = () => values.rp = $rpi.value

let getValue = () => {
    niVal ()
    eiVal ()
    piVal ()
    rpiVal ()
}

let valid = false

let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let passwordFilter = /^[A-Za-z]\w{7,20}$/

let validate = () => {
    getValue ()

    if (values.e.match(emailFilter)) {
        $ei.style.borderBottom = '1px #121212 solid'
    }
    if (values.p.match(passwordFilter)) {
        $pi.style.borderBottom = '1px #121212 solid'
    }
    if (values.p == values.rp) {
        $rpi.style.borderBottom = '1px #121212 solid'
    }

    if (values.e.match(emailFilter) && values.p.match(passwordFilter) && values.p == values.rp) {
        valid = true
    } else {
        if (!values.e.match(emailFilter)) {
            $ei.style.borderBottom = '1px red solid'
        } else if (!values.p.match(passwordFilter)) {
            $pi.style.borderBottom = '1px red solid'
        } else if (values.p != values.rp) {
            $rpi.style.borderBottom = '1px red solid'
        }
    }
}

let register = () => {
    validate () 
    if (valid == true) {
        localStorage.setItem('loginState', true)

        let tmp = JSON.stringify(values)
        localStorage.setItem('LS_values', tmp)
        window.location.href = "index.html"
    }
}

$btn.addEventListener('click', register)