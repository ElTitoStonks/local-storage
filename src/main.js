"use strict"
let titulo = document.querySelector("#titulo");
let subtitulo = document.querySelector("#subtitulo");
let descripcion = document.querySelector("#descripcion");
let btn = document.querySelector("#enviar");
let popUp = document.querySelector("#pop");

let caja_titulo = document.querySelector("#caja-titulo");

function storageElements() {
    btn.addEventListener("click", ((e) => {
        e.preventDefault()
        if (titulo.value !== "" && subtitulo.value !== "" && descripcion.value !== "") {

            let contador = localStorage.length;
            const storage = {
                titulos: titulo.value,
                subtitulos: subtitulo.value,
                descripciones: descripcion.value
            }

            localStorage.setItem(`info ${contador + 1}`, JSON.stringify(storage));




            

        } else {
            if(popUp.classList.contains("hidden")){
                popUp.classList.remove("hidden");
                setTimeout((()=>{
                    popUp.classList.add("hidden");
                }),2000)
            };
        };


    }));

};


function getElements ( ) {
    let contador = localStorage.length;

    for (let i = 1; i <= contador; i++) {
        let dataStorage = localStorage.getItem(`info ${i}`);

        if(dataStorage) {
            let legible = JSON.parse(dataStorage);
            console.log(legible)
        }
    }
}


getElements();
storageElements();

