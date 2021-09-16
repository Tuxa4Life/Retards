// input stuff
let $Input = document.querySelector('.message-input')
let $messagePlace = document.querySelector('.message-place')
let $sendBtn = document.querySelector('.fa-paper-plane')

let inputValue = ''

$Input.addEventListener(
    'input', function () {
        inputValue = this.value
    }
)
  
$Input.addEventListener(
    'keydown', function (e) {
        if(e.keyCode == 13) {
            sendMessage ()
        }
    }
)

let sendMessage = () => {
    let message = document.createElement('div')
    $messagePlace.appendChild(message)
    message.textContent = inputValue

    message.classList.add('message')

    message.innerHTML = `<span class="user-name-place">${localStorage.getItem('LSname') + ' ' + localStorage.getItem('LSsurename')}</span>
    <p class="messageValue">${inputValue}</p>`

    inputValue = ''
    $Input.value = ''
}

$sendBtn.addEventListener('click', sendMessage)

document.querySelector('.user-profile-chat').textContent = localStorage.getItem('LSname') + ' ' + localStorage.getItem('LSsurename')