const info = data.events

const id = new URLSearchParams(location.search).get("id")
console.log(id)
const events = info.find(element => element._id == id)
console.log(events)
const container = document.getElementById("container")
container.innerHTML = `
        <div>
        <img class="books" src="${events.image}" alt="books">
        </div>
        <div class="p-4 bg-dark text-white">
        <h2>${events.name}</h2>
        <h4>${events.category}</h4>
        
        <p>${events.description}</p>
        <p> Date: ${events.date}</p>
        <p> Place: ${events.place}</p>
        <p> Capacity: ${events.capacity} </p>
        <p> Asistance: ${events.assistance} </p>
        <p> Price: $ ${events.price} </p>
        


        </div>
        `
