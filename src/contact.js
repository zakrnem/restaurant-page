export function contactDOM() {
    let main = document.createElement('main')
    let container = document.createElement('div')
    container.className = 'contact'
        
        let phone = document.createElement('div')
        container.appendChild(phone)
            let phoneLogo = document.createElement('img')
                phoneLogo.className = 'contact-icon'
                phoneLogo.src = './images/location-svg-repo-com.svg'
                phone.appendChild(phoneLogo)

            let phoneNumber = document.createElement('p')
                phoneNumber.textContent = '0058-0085'
                phone.appendChild(phoneNumber)

        let socialMedia = document.createElement('div')
        container.appendChild(socialMedia)
            let socialLogo = document.createElement('img')
                socialLogo.className = 'contact-icon'
                socialLogo.src = './images/location-svg-repo-com.svg'
                socialMedia.appendChild(socialLogo)

            let socialUser = document.createElement('p')
                socialUser.textContent = 'shawarma.paradise'
                phone.appendChild(socialUser)

    main.appendChild(container)
    let content = document.querySelector('#content')
    content.appendChild(main)
}