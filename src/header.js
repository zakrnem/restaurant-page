export function head() {
    let header = document.createElement('header')

    let logo = document.createElement('div')
    logo.className = 'logo'
    logo.textContent = 'Shawarma Paradise'

    header.appendChild(logo)
    let content = document.querySelector('#content')
    return content.appendChild(header)
}