console.log("Hola Mundos");

const url = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=10";

//cargar la api consumirla 
const getData = (api, opc) => {

    return fetch(api)//retornar
    .then((Response) => Response.json())
    .then((json) => {
        if(opc == 0)
        obtenerUrl(json);
        else
        imprimirDatos(json);
    })
    .catch((error) => {
        console.log("un Error", error)
    })
};

//imprimir los resultados
let todaData; 
let html;

const obtenerUrl = (data) => {
    todaData=data;
    validarPaginacion(todaData);

    data.results.forEach(pokemon => {
        html = "";
        getData(pokemon.url, 1);
    });
     

}
const imprimirDatos = (data) => {

                //pintar cajas con personajes 
                html += `<div class="cards bg-warning">`;
                html += `<div>`;
                html += `<img class="formatoPic" src="${data.sprites.other.dream_world.front_default}">`;
                html += `</div>`;
                html += `<div class="contenedorTextos">`;
                html += `<small class="txtLabel text-dark">Nombre</small>`;
                html += `<p class="txtTexto text-dark">${data.name}</p>`;
                html += `<small class="txtLabel text-dark">Habilidades</small>`;
                data.abilities.forEach(habilidad => {
                    html += `<p class="txtTexto text-dark">${habilidad.ability.name}</p>`;
                    
                });
                
                html += `</div>`;
                html += `</div>`;

                 document.getElementById("contenedorTodo").innerHTML = html
    
}

const validarPaginacion = (data) => {
    if(data.previous === null){
        document.getElementById("btnAtras").style.display = "none";
    }else{
        document.getElementById("btnAtras").style.display = "block"; 
    }

    if(data.next == null){
        document.getElementById("btnAdelante").style.display = "none";
    }else{
        document.getElementById("btnAdelante").style.display = "block";
    }
}




//paginacion o navegacion 
const btnAtras = document.getElementById("btnAtras");
const btnAdelante = document.getElementById("btnAdelante");

btnAtras.addEventListener('click', () =>{
    //navegar hacia atras
    //eviar la url con info.prev
    getData(todaData.previous,0)
})
btnAdelante.addEventListener('click', () => {
    //navegar hacia adelante
    //enviar la url con info.next
    getData(todaData.next,0)
})
//consumir apis 
getData(url, 0);


    
