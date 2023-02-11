const buttonToOpen = document.querySelector(".navbar-menu_logo")
const menu = document.querySelector(".header__menu");

function openMenu() {
        buttonToOpen.classList.toggle('close-button')
        menu.classList.toggle('close-menu')
    }

export{openMenu, buttonToOpen}