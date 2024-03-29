import '../node_modules/footer-zkrnem/styles.css'
import './style.css';
head()

import {homeBody} from './home.js'
homeBody()

import { menuDOM } from './menu.js'
import { clearDOM } from './clearDOM.js';

import { contactDOM } from './contact.js'

function head() {
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

function headerListener() {
    let home = document.querySelector('#home')
    home.addEventListener('click', () => {
        clearDOM()
        homeBody()
    })

    let menu = document.getElementById('menu')
    menu.addEventListener('click', () => {
        clearDOM()
        menuDOM()
    })

    let contact = document.getElementById('contact')
    contact.addEventListener('click', () => {
        clearDOM()
        contactDOM()
    })

    let main = document.querySelector('.main')
}

