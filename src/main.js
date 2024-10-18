"use strict"
let titulo = document.querySelector("#titulo");
let subtitulo = document.querySelector("#subtitulo");
let descripcion = document.querySelector("#descripcion");
let btn = document.querySelector("#enviar");
let popUp = document.querySelector("#pop");

let caja_titulo = document.querySelector("#caja-titulo");

function storageElements() {
    btn.addEventListener("click", ((e) => {
        // e.preventDefault()
        if (titulo.value !== "" && subtitulo.value !== "" && descripcion.value !== "") {

            let contador = localStorage.length;
            const storage = {
                titulos: titulo.value,
                subtitulos: subtitulo.value,
                descripciones: descripcion.value
            }

            localStorage.setItem(`info ${contador + 1}`, JSON.stringify(storage));






        } else {
            if (popUp.classList.contains("hidden")) {
                popUp.classList.remove("hidden");
                setTimeout((() => {
                    popUp.classList.add("hidden");
                }), 2000)
            };
        };


    }));

};


function getElements() {
    let contador = localStorage.length;
    let caja_contenido = document.querySelector("#caja1");
    let form = document.querySelector("#formulario");
    console.log("Vacio");     // caja_contenido.classList.contains("flex");     caja_contenido.classList.remove("flex");    caja_contenido.classList.add("hidden"); } else {     caja_contenido.classList.remove("hidden");     caja_contenido.classList.add("flex"); }

    for (let i = 1; i <= contador; i++) {
        let dataStorage = localStorage.getItem(`info ${i}`);

        if (dataStorage) {
            let legible = JSON.parse(dataStorage);
            
            caja_contenido.innerHTML += `<div id="art1" class="
                h-40
                py-3
                px-5
                w-1/4
                md:w-full
              bg-blue-400
                overflow-hidden
                text-center
                flex 
                justify-center
                flex-wrap
                flex-col
                flex-grow
                content-center

                ">
                    <h1 id="caja-titulo" class="text-2xl font-bold text-gray-800 text-wrap h-1/4 w-full">${legible.titulos}</h1>
                    <h3 class=" max-h-7 truncate">${legible.subtitulos}</h3>
                    <button class="h-1/4
                     w-full
                   bg-blue-50 border
                   border-black
                      rounded-xl">
                        Ver
                    </button>
                </div>`

                //     let crear_sec = document.createElement("section");
                // crear_sec.className = "h-auto px-2 py-1 flex justify-around flex-wrap gap-1";



        }
    }
}


getElements();
storageElements();

