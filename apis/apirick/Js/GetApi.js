console.log("Hola Mundo");

const url = "https://rickandmortyapi.com/api/character/";

//cargar la api consumirla 
const getData = (api) => {
    return fetch(api)//retornar
    .then((Response) => Response.json())
    .then((json) => {
        imprimirdatos(json)
    })
    .catch((error) => {
        console.log("un Error", error)
    })


};

//imprimir los resultados
let todaData; 
const imprimirdatos = (data) => {
    todaData=data;
    validarPaginacion(todaData)
    let = html = "";
    data.results.forEach(personaje => {
        console.log("Nombre [" +personaje.name + "] Especie [" + personaje.species + "] foto [ " + personaje.image + "] ")
                //pintar cajas con personajes 
                html += `<div class="cards bg-warning">`;
                html += `<div>`;
                html += `<img class="formatoPic" src="${personaje.image}">`;
                html += `</div>`;
                html += `<div class="contenedorTextos">`;
                html += `<small class="txtLabel text-dark">Nombre</small>`;
                html += `<p class="txtTexto text-dark">${personaje.name}</p>`;
                html += `<small class="txtLabel text-dark">Especie</small>`;
                html += `<p class="txtTexto text-dark">${personaje.species}</p>`;
                html += `</div>`;
                html += `</div>`;

    });
    document.getElementById("contenedorTodo").innerHTML = html
}

const validarPaginacion = (data) => {
    if(data.info.prev === null){
        document.getElementById("btnAtras").style.display = "none";
    }else{
        document.getElementById("btnAtras").style.display = "block"; 
    }

    if(data.info.next == null){
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
    getData(todaData.info.prev)
})
btnAdelante.addEventListener('click', () => {
    //navegar hacia adelante
    //enviar la url con info.next
    getData(todaData.info.next)
})

//consumir o ivocar api
getData(url);



    
