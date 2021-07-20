import cards from './templates/cards.hbs'
import menu from './menu.json'
import './sass/main.scss';



const menuRef = document.querySelector('.js-menu')
const themeSwichRef = document.querySelector('#theme-switch-toggle')

const cardMarkup = createMenuCards(menu)
menuRef.insertAdjacentHTML('beforeend', cardMarkup)

themeSwichRef.addEventListener('click', onThemeSwich)

themeCheck()

function createMenuCards(menu) {
    return menu.map(cards).join('')
}

function themeCheck() {
    if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-theme')
    themeSwichRef.checked = true;
}
}

function onThemeSwich(event) {
        const bodyClasslist = document.body.classList
        localStorage.setItem('dark-mode', event.target.checked)   
    if (localStorage.getItem('dark-mode') === 'true') {
            bodyClasslist.remove('light-theme')
            bodyClasslist.add('dark-theme')
    } else {
            bodyClasslist.remove('dark-theme')
            bodyClasslist.add('light-theme')
        }
}


