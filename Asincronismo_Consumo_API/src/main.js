import { api } from "./api/api.js";

const cardContenedor = document.querySelector(".contenedorCard");
//const spinner = document.getElementById("spinner");

async function crearCard(id) {
    const apiInfo = await api.getApiInfo(id);
    const urlApi =  api.url();
    const { name, status, species, type, gender, image } = apiInfo;
    if (apiInfo.error) {
        console.error(`Error: ${apiInfo.status} - ${apiInfo.message}`);
        return;
    }
    
    cardContenedor.innerHTML += `
     <div class="card mb-3 cardFondo" style="width: 540px;">
            <div class="row g-0 ">
              <div class="col-md-4 ">
                <img src="${image}" class="img-fluid rounded-start imagenCard" alt="${name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <a class="card-title textoBlanco nombreLink" href="${urlApi}${apiInfo.id}" target="_blank">${name}</a>
                  
                  <p class="card-text textoBlanco"> Estado: <span class="${status == "Alive" ? "text-success" : "text-danger"}">${status}</span> </p>
                  <p class="card-text textoBlanco">Especie: ${species} </p>
                  <p class="card-text textoBlanco">Tipo: ${type == "" ? "Desconocido" : type} </p>
                  
                  <p class="card-text textoBlanco"><small class="textoBlanco text-body-secondary ">Género: ${gender}</small></p>
                </div>
              </div>
            </div>
          </div>
    `;


    //spinner.classList.add("d-none");
   // roversContainer.appendChild(card);

}

const cantidad = 10;

async function cargarCards() {
    for (let i = 1; i <= cantidad; i++) {
        await crearCard(i); // Espera a que termine antes de continuar
    }
}

cargarCards();

/*  si se usa promesas
let promise = Promise.resolve(); // Inicia con una promesa resuelta

for (let i = 1; i <= 5; i++) {
    promise = promise.then(() => crearCard(i)); // Llama a cada card secuencialmente
}
*/