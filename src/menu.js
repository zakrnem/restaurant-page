import { footer } from './footer.js';

function newPlate(imgSrc, name, price) {
    let item = document.createElement('a')
    item.className = 'menu-item'
    item.id = name.toLowerCase().replace(/\s+/g, '')
        let plateImage = document.createElement('img')
        plateImage.className = 'plate-image'
        plateImage.src = `./images/${imgSrc}`
        item.appendChild(plateImage)

        let plateName = document.createElement('div')
        plateName.className = 'plate-name'
        plateName.textContent = name
        item.appendChild(plateName)

        let platePrice = document.createElement('div')
        platePrice.className = 'plate-price'
        platePrice.textContent = `Price: ${price}`
        item.appendChild(platePrice)
    return item
}

//PENDING: Reduce number of steps on this function
export function menuDOM() {
    let main = document.createElement('main')
    let container = document.createElement('div')
    container.className = 'menu'
    
    let item1 = newPlate('falafel-svgrepo-com.svg','Falafel', '3.21$')
    let item2 = newPlate('hookah-svgrepo-com.svg','Hookah','1.82$')
    let item3 = newPlate('lamb-svgrepo-com.svg','Lamb', '4.50$')
    let item4 = newPlate('burrito-svgrepo-com.svg','Shawarma','5.15$')
    let item5 = newPlate('hummus-svgrepo-com.svg','Humus','3.35$')
    let item6 = newPlate('salad-svgrepo-com.svg','Tabouleh','2.47$')

    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)
    container.appendChild(item4)
    container.appendChild(item5)
    container.appendChild(item6)
    
    main.appendChild(container)
    content.appendChild(main)
    footer()
    plateListener()
}

function plateListener() {
    let menu = document.querySelector('.menu')
    menu.addEventListener('click', (e) => {
        if (e.target.className === 'menu-item'
        || e.target.parentNode.className === 'menu-item') {
            console.log(e.target.id ? e.target.id : e.target.parentNode.id)
        }
    })
}

