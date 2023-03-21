let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let cardsDetails = []
fetch(urlApi)
    .then(res => res.json())
    .then(datos => {
        cardsDetails = datos.events
        dibujarDetails()
        console.log("cardsDetails", cardsDetails)

    })
    .catch(err => console.log(err))
/* const id = new URLSearchParams(location.search).get("id")
console.log(id)
const events = info.find(element => element._id == id)
console.log(events) */


let id = new URLSearchParams(location.search).get("id")
console.log("id", id)

const dibujarDetails = () => {
    let events = cardsDetails.find(element => element._id == id)


    console.log("events", events)
    let container = document.getElementById("container")
    container.innerHTML = `
        <div>
        <img class="books" src="${events.image}" alt="books">
        </div>
        <div class="p-4 bg-white text-danger">
        <h2>${events.name}</h2>
        <p>${events.description}</p>
        <p> Date: ${events.date}</p>
        <p> Place: ${events.place}</p>
        <p> Capacity: ${events.capacity} </p>
        <p> Asistance: ${events.assistance} </p>
        <p> Price:  ${events.price}usd</p>
        </div>
        `
}      
       
/* let urlApi = "https://mindhub-xj03.onrender.com/api/amazing" */

/*  const info = datos.events */
/* const $div = document.getElementById("cards")
const $checkContainer = document.getElementById('checkContainer')
const $search = document.getElementById("search") */
/* const events = cardsDetails.events */
 
/* let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

async  function traerDatos() {
     try {
        const response = await fetch(urlApi)
        console.log(response);
        const data = await response.json()
        console.log(data)

     }
     catch(error){
        console.log(error)
     }
}    
traerDatos()

function crearDetailsApi(data) {
        console.log([document])
        let query = location.search
        let parametros = new URLSearchParams(query)
        console.log(parametros)

        const id = parametros.get("id")
        console.log(id)

        let evento = data.events.find(evento => evento._id == id )
        console.log(evento)
        
        let container = document.querySelector(".moreDetails")

        container.innerHTML = `
        <div>
        <img class="books" src="${Array.image}" alt="books">
        </div>
        <div class="p-4 bg-dark text-white">
        <h2>${events.name}</h2>
        <h4>${events.category}</h4>
        console.log(hola)
        
        <p>${events.description}</p>
        <p> Date: ${events.date}</p>
        <p> Place: ${events.place}</p>
        <p> Capacity: ${events.capacity} </p>
        <p> Asistance: ${events.assistance} </p>
        <p> Price: $ ${events.price} </p>
        


        </div>
        `
}
  */
/* fetch( " https://mindhub-xj03.onrender.com/api/amazing")
    .then( res => res.json())
    .then( datos => {
        datos = datos.events
        console.log(datos)
        render(datos, $div)
        renderCheck(datos, $checkContainer)
    } )
    .catch( err => console.log(err)) */

/* const id = new URLSearchParams(location.search).get("id")
console.log(id)
const events = info.find(element => element._id == id)
console.log(events) */

//rodrigo

/* 
fetch ("https://mindhub-xj03.onrender.com/api/amazing" )
    .then(response =>response.json )
    .then(response => {
        const id = new URLSearchParams(location.search).get("id")
        console.log(id)
        events2=response.events

        const eventsss = events2(element => element._id == id)
        console.log(events)
        const container = document.getElementById("container")
        container.innerHTML = `
        <div>
        <img class="books" src="${eventsss.image}" alt="books">
        </div>
        <div class="p-4 bg-dark text-white">
        <h2>${eventsss.name}</h2>
        <p>${eventsss.description}</p>
        <p>${eventsss.date}</p>
        </div>
        ` 

    } ) 
 */


