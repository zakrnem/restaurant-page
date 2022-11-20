import { menuBody } from './menu.js'
import { plateListener } from './menu.js';
import {homeBody} from './home.js'
import {orderListener} from './home.js'
import { clearDOM } from './clearDOM.js';

export function head() {
    let header = document.createElement('header')

    let icon = document.createElement('img')
    icon.className = 'icon'
    icon.src = './images/icon.svg'

    let logo = document.createElement('div')
    logo.className = 'logo'
    logo.textContent = 'Shawarma Paradise'

    let nav = document.createElement('div')
    nav.className = 'nav'

    let homeButton = document.createElement('button')
    homeButton.id = 'home'
    homeButton.textContent = 'Home'

    let menuButton = document.createElement('button')
    menuButton.id = 'menu'
    menuButton.textContent = 'Menu'

    let contactButton = document.createElement('button')
    contactButton.id = 'contact'
    contactButton.textContent = 'Contact Us'
    
    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)

    header.appendChild(icon)
    header.appendChild(logo)
    header.appendChild(nav)

    let content = document.querySelector('#content')
    content.appendChild(header)
    headerListener()
}

export function headerListener() {
    let home = document.querySelector('#home')
    home.addEventListener('click', () => {
        clearDOM()
        homeBody()
        orderListener()
    })

    let menu = document.getElementById('menu')
    menu.addEventListener('click', () => {
        clearDOM()
        menuBody()
        plateListener()
    })

    let contact = document.getElementById('contact')
    contact.addEventListener('click', () => {
        console.log('Contact')
    })

    let main = document.querySelector('.main')
}
