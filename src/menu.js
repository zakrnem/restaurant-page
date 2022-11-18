export function body() {
    let main = document.createElement('main')
    
    let container = document.createElement('div')
    container.className = 'menu'

    let item1 = document.createElement('div')
    item1.className = 'menu-item'
    container.appendChild(item1)

        let plateImage1 = document.createElement('img')
        plateImage1.className = 'plate-image'
        plateImage1.src = '/src/burrito-svgrepo-com.svg'
        item1.appendChild(plateImage1)

        let plateName1 = document.createElement('div')
        plateName1.className = 'plate-name'
        plateName1.textContent = 'Shawarma'
        item1.appendChild(plateName1)

        let platePrice1 = document.createElement('div')
        platePrice1.className = 'plate-price'
        platePrice1.textContent = 'Price: 5.15$'
        item1.appendChild(platePrice1)

    let item2 = document.createElement('div')
    item2.className = 'menu-item'
    container.appendChild(item2)

        let plateImage2 = document.createElement('img')
        plateImage2.className = 'plate-image'
        plateImage2.src = '/src/falafel-svgrepo-com.svg'
        item2.appendChild(plateImage2)

        let plateName2 = document.createElement('div')
        plateName2.className = 'plate-name'
        plateName2.textContent = 'Falafel'
        item2.appendChild(plateName2)

        let platePrice2 = document.createElement('div')
        platePrice2.className = 'plate-price'
        platePrice2.textContent = 'Price: 3.21$ '
        item2.appendChild(platePrice2)
        
        let item3 = document.createElement('div')
        item3.className = 'menu-item'
        container.appendChild(item3)
    
            let plateImage3 = document.createElement('img')
            plateImage3.className = 'plate-image'
            plateImage3.src = '/src/hookah-svgrepo-com.svg'
            item3.appendChild(plateImage3)
    
            let plateName3 = document.createElement('div')
            plateName3.className = 'plate-name'
            plateName3.textContent = 'Hookah'
            item3.appendChild(plateName3)
    
            let platePrice3 = document.createElement('div')
            platePrice3.className = 'plate-price'
            platePrice3.textContent = 'Price: 1.82$ '
            item3.appendChild(platePrice3)

            let item4 = document.createElement('div')
            item4.className = 'menu-item'
            container.appendChild(item4)
        
                let plateImage4 = document.createElement('img')
                plateImage4.className = 'plate-image'
                plateImage4.src = '/src/lamb-svgrepo-com.svg'
                item4.appendChild(plateImage4)
        
                let plateName4 = document.createElement('div')
                plateName4.className = 'plate-name'
                plateName4.textContent = 'Lamb'
                item4.appendChild(plateName4)
        
                let platePrice4 = document.createElement('div')
                platePrice4.className = 'plate-price'
                platePrice4.textContent = 'Price: 4.50$ '
                item4.appendChild(platePrice4)

    main.appendChild(container)
    let content = document.querySelector('#content')
    return content.appendChild(main)
}
