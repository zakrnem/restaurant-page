import { footer } from './footer.js';

export function contactDOM() {
    let main = document.createElement('main')
    let container = document.createElement('div')
    container.className = 'contact'
    let contactInfo = document.createElement('div')
    contactInfo.className = 'info'
        
        let contactTitle = document.createElement('div')
        contactTitle.className = 'contact-title'
        contactTitle.textContent = 'Contact us:'
        contactInfo.appendChild(contactTitle)

        let phone = document.createElement('div')
        phone.className = 'phone'
        contactInfo.appendChild(phone)
            let phoneLogo = document.createElement('img')
                phoneLogo.className = 'contact-icon'
                phoneLogo.src = './images/phone-svgrepo-com.svg'
                phone.appendChild(phoneLogo)

            let phoneNumber = document.createElement('p')
                phoneNumber.textContent = '0058-0085'
                phone.appendChild(phoneNumber)

        let socialMedia = document.createElement('div')
        socialMedia.className = 'social'
        contactInfo.appendChild(socialMedia)
            let socialLogo = document.createElement('img')
                socialLogo.className = 'contact-icon'
                socialLogo.src = './images/telegram-svgrepo-com.svg'
                socialMedia.appendChild(socialLogo)

            let socialUser = document.createElement('p')
                socialUser.textContent = 'shawarma.paradise'
                socialMedia.appendChild(socialUser)

    container.appendChild(mapHTML())
    container.appendChild(contactInfo)
    main.appendChild(container)
    let content = document.querySelector('#content')
    content.appendChild(main)
    footer()
}

function mapHTML() {
    let mapEmbed = document.createElement('div')
    mapEmbed.className = 'gmap_canvas'

    let mapTitle = document.createElement('div')
    mapTitle.className = 'map-title'
    mapTitle.textContent = 'Our location:'
    mapEmbed.appendChild(mapTitle)

    let mapCanvas = document.createElement('iframe')
    mapCanvas.width = 350
    mapCanvas.height = 250
    mapCanvas.id = 'gmap_canvas'
    mapCanvas.src = "https://maps.google.com/maps?q=1%20Galle%20Face%20Shangri-La%20Hotel,%20Colombo%2000200%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
    mapEmbed.appendChild(mapCanvas)

    return mapEmbed
}