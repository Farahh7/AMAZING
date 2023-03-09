let eventos = data.events 

let currentDate = new Date(data.currentDate)


function crearCards(array) {

  let divBackground = document.getElementById('cards')

  divBackground.className = 'cards'
    for (let evento of array) {
        let div = document.createElement('div')
        div.className = 'cardindividual'
        div.id = 'cartas'
        divBackground.appendChild(div)

        let divCont = document.createElement('div')
        divCont.id = 'card'
        divCont.className = 'card'
        div.appendChild(divCont);

        let figure = document.createElement('figure')
        figure.id = 'card-img-top'
        
        divCont.appendChild(figure)

        let imge = document.createElement('img')
        imge.src = evento.image
        figure.appendChild(imge)
        let divInfo = document.createElement('div')
        divInfo.id = 'info'
        divInfo.className = 'card-body'
        divCont.appendChild(divInfo)

        let title = document.createElement('h5')
        title.id = 'title'
        title.className = 'card-title'
        title.innerHTML = evento.name
        divInfo.appendChild(title)
        let text = document.createElement('p')
        text.className = 'card-text'
        text.innerHTML = evento.description
        divInfo.appendChild(text)
        let divPm = document.createElement('div')
        divPm.id = 'precio'
        divPm.className = 'text2'
        divInfo.appendChild(divPm)

        let price = document.createElement('p')
        price.id = 'precio'
        price.className = 'text2'
        price.innerHTML = `$ ${evento.price}`
        divPm.appendChild(price)
        let link = document.createElement('a')
        link.id = 'bot'
        divPm.appendChild(link)

        let moreDetails = document.createElement('a')
        moreDetails.className = 'btn btn-primary'
        moreDetails.innerHTML = 'view more details'
        moreDetails.href = `./events.html?id=${evento._id} `
        link.appendChild(moreDetails)
  }
}
crearCards(eventos);
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


const $div = document.getElementById("cards")
const $checkContainer = document.getElementById('checkContainer')
const $search = document.getElementById("search")
const events = data.events

render(events, $div)
renderCheck(events, $checkContainer)

$checkContainer.addEventListener('change', () =>{
    let filtro = filter(events, $search)
    render(filtro, $div)
})

$search.addEventListener('input', () => {
    let filtro = filter(events, $search)
    if (filtro.length === 0) {
        $div.innerHTML = "<p>No events were held. try another search.</p>"
    } else {
        render(filtro, $div)
    }
})

 function render(list, container){
    
    let html = ""
    for (let event of list){
        html += `   
            <div class="card">
            <img src=${event.image} id="'card-img-top">
            <div class="card-body ">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            <div class="text2">
                <p> $${event.price}</p>
                <a href="./events.html?id=${event._id}" class="btn btn-primary  text-black">More info</a>
            </div>
            </div>
        </div>`
        }
    container.innerHTML = html;
} 

function renderCheck(list, container){
    let html = ''
    let newSet = new Set(list.map(element => element.category))
    let categories = Array.from(newSet)
    categories.forEach((element) => {
        html += `<label for="${element}">${element}</label>
        <input type="checkbox" id="${element}" value="${element}">`
    })
    container.innerHTML = html
}

function filterCategory(events){
    const checked = document.querySelectorAll("input[type = 'checkbox']:checked")
    let selectedCategories = Array.from(checked).map((element) => element.value)
    const filter = selectedCategories.map((element) => events.filter((event) =>{
        return event.category === element
    })).flat()
    if(!checked.length){
        return events
    }
    else{
        return filter
    }
}

function filterSearch(events, input){
        return events.filter((event) =>
        event.name.toUpperCase().includes(input.value.toUpperCase())
    );
}

function filter(events, search){
    let filterByCategory = filterCategory(events)
    let filterBySearch = filterSearch(filterByCategory, search)
    return filterBySearch
    
}
