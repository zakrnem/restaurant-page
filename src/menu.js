export function body() {
    let main = document.createElement('main')

    let container = document.createElement('div')
    container.className = 'container'

    let title = document.createElement('h3')
    title.textContent = 'Come on for some delicious arabic food!'
    container.appendChild(title)

    let orderButton = document.createElement('button')
    orderButton.id = 'order'
    orderButton.textContent = 'Make a order'
    container.appendChild(orderButton)

    let info = document.createElement('div')
    info.className = 'info'
    container.appendChild(info)

        let location = document.createElement('div')
        location.className = 'location'
        info.appendChild(location)

            let locationLogo = document.createElement('img')
            locationLogo.className = 'info-icon'
            locationLogo.src = '/src/location-svg-repo-com.svg'
            location.appendChild(locationLogo)

            let locationText = document.createElement('p')
            locationText.textContent = '1 Galle Face Shangri-La Hotel, Colombo 00200 Sri Lanka'
            location.appendChild(locationText)

        let hours = document.createElement('div')
        hours.className = 'hours'
        info.appendChild(hours)

            let hoursLogo = document.createElement('img')
            hoursLogo.className = 'info-icon'
            hoursLogo.src = '/src/clock-svgrepo-com.svg'
            hours.appendChild(hoursLogo)

            let days = document.createElement('div')
            days.className = 'days'
            hours.appendChild(days)

                let weekHoursText = document.createElement('p')
                weekHoursText.textContent = 'Monday-Thursday: 8am-8pm'
                days.appendChild(weekHoursText)

                let weekendHoursText = document.createElement('p')
                weekendHoursText.textContent = 'Friday-Sunday: 8am-12am'
                days.appendChild(weekendHoursText)

    main.appendChild(container)
    let content = document.querySelector('#content')
    return content.appendChild(main)
}

export function orderListener() {
    let order = document.querySelector('#order')
    order.addEventListener('click', () => {
        console.log('Order')
    })
}
