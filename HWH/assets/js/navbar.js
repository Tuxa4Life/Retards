// settings open close
const $cog = document.querySelector('.cog')
const $settings = document.querySelector('.settings-tab')

let settingState = false

let changeSettingState = () => {
    settingState = !settingState
    if (settingState == true) {
        $settings.classList.remove('close-settings')
        $settings.classList.add('open-settings')
    } else {
        $settings.classList.remove('open-settings')
        $settings.classList.add('close-settings')
    }
}

$cog.addEventListener('click', changeSettingState)