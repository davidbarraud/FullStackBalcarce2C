import { users } from "./users.js";

function recorrerArreglo(){
    users.forEach(e => {
        console.log(e.fisrtName, e.LastName)
    });
};


function filtrarArreglo(){
    const result = users.filter((nombre)=> nombre.fisrtName =="Susan");
    console.log(result);
};


function unSoloArreglo(){
    const result = users.map(function(item){
        return(item.fisrtName + "-" + item.LastName)
    });
    console.log( result);
};


// Mostrando los cambios

console.log( `\n ***** Recorrer el arreglo con forEach *****`);

recorrerArreglo();

console.log( `\n ***** Filtrar arreglo por nombre Susan *****`);

filtrarArreglo();

console.log( `\n ***** Crear arreglo con MAP ***** `);

unSoloArreglo();