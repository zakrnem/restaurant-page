import { footer } from './footer.js';

export function contactDOM() {
    let main = document.createElement('main')
    let container = document.createElement('div')
    container.className = 'contact'
    let contactInfo = document.createElement('div')
    contactInfo.className = 'info'
        
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
    mapEmbed.innerHTML = 
    '<div class="gmap_canvas"><iframe width="350" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=1%20Galle%20Face%20Shangri-La%20Hotel,%20Colombo%2000200%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>'
    return mapEmbed
}