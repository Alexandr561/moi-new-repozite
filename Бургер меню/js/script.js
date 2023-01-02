const menu = document.querySelector('.menu__body')
const menuIcon = document.querySelector('.menu__icon')

const body = document.body;

if(menu && menuIcon) {
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuIcon.classList.toggle('active')
        body.classList.toggle('lock')
    })
}