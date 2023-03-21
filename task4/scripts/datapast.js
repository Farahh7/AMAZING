let checkboxsElegidos =[] //guardo los checksElegidos
let searchSelect = "" //guardo lo que haya en el buscador


let arrayFromAPI;
let arrayEvents=[];
async function getDataFromApi()
{
    await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    
    .then(resp =>resp.json())
    .then(json => arrayFromAPI =json)
    arrayEvents = arrayFromAPI.events

function creadorDeChecks() {
    let contenedorCheckbox = document.getElementById("contenedorCheckbox")//llamo a los chekcs
    let mapeoCategorias = arrayEvents.map(cat=> cat.category)
    const arrayCategorias = new Set(mapeoCategorias) //creo el array con la lista de categorias no repetidas
    let categorias = [...arrayCategorias] // la lista anterior la guardo en la letiable categorias
    
    let inputCheck= ""
    categorias.forEach(category => { //creo los checks con las categorias guardadas
        inputCheck +=` 
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${category}">
        <label class="form-check-label" for="inlineCheckbox">${category}</label>
        </div>` 
    })
    contenedorCheckbox.innerHTML = inputCheck
    
    
}
creadorDeChecks()
let checkbox = document.querySelectorAll('input[type=checkbox]')
checkbox.forEach(check => check.addEventListener("click", (event)=> {
    let checked = event.target.checked

    if (checked) { //Establezcon un condicional que verifica si la propiedad/atributo checked del elemento html, es true o false, es decir si esta tildado o no el checkbox
        checkboxsElegidos.push(event.target.value) //Si esta tildado lo empujo lo guardo dentro de la letiable local declarada anteriormente
        filterArray()//LLamo y les paso el parametro a la funcion que se ocupara del filtrado dl array
    } else {
        checkboxsElegidos = checkboxsElegidos.filter(uncheck => uncheck !== event.target.value) //Este metodo lo utilizo para quitar del array en checkbox deschequeado
        filterArray()//LLamo y les paso el parametro a la funcion que se ocupara del filtrado dl array

    } //En el caso que el checkbox sea destildado es decir pase de true a false, le  aplico a la letible checkboxSelected un filtros en el cual 
}))

let inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener("keyup", (event) => {
    searchSelect = event.target.value
    filterArray()
})

function filterArray() {
    let datos = []
    if (checkboxsElegidos.length > 0 && searchSelect !== "") {
        checkboxsElegidos.map(cat => {
            datos.push(...arrayEvents.filter(card => card.name.toLowerCase().includes(searchSelect.trim().toLowerCase())  &&
                card.category == cat))
        })
    }
    else if (checkboxsElegidos.length > 0 && searchSelect === "") {
        checkboxsElegidos.map(cat => datos.push(...arrayEvents.filter(card => card.category == cat)))
    }
    else if (checkboxsElegidos.length == 0 && searchSelect !== "") {
        datos.push(...arrayEvents.filter(card => card.name.toLowerCase().includes(searchSelect.trim().toLowerCase())))
    }
    else { datos.push(...arrayEvents) }
    
    
    displayCardEventos(datos)
    //CardUpcoming(datos)
}
filterArray()


function displayCardEventos(datos) {
    let templateCartas= ""
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].date < arrayFromAPI.currentDate) {

        templateCartas +=`
        <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
            <div class="card" > 
                <img class="imagenCartas" src="${datos[i].image}">
                <div class="card-body d-flex flex-column  justify-content-between">
                    <h5 class="card-title">${datos[i].name}</h5>
                    <p class="card-text">${datos[i].description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class= "footerCard">
                            <p class="card-text"><b>${datos[i].date}</b></p>
                            <p class="card-text"><b>${datos[i].price}usd</b></p>
                        </div>
                        <a class="btn btn-outline-danger" target="_blank" href="events.html?id=${datos[i]._id}">More Info</a>
                    </div>
                </div>
            </div>
        </div> `
        
    }}
    if (templateCartas.length > 0) {
        document.querySelector('#contenedorCartas').innerHTML = templateCartas
    }
    else
    {
        let sinResultados =`<img class= "imgError" src="./images/sinresultados.jpg"  alt="sinResultados">`;
        document.querySelector('#contenedorCartas').innerHTML = sinResultados
        console.log(datos);
    }

}
}
getDataFromApi()
