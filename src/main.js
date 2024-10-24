"use strict";

let titulo = document.querySelector("#titulo");
let subtitulo = document.querySelector("#subtitulo");
let descripcion = document.querySelector("#descripcion");
let btn = document.querySelector("#enviar");
let popUp = document.querySelector("#pop");

let caja_titulo = document.querySelector(".caja-titulo");

function storageElements() {
    // Function to store the elements in the local storage
    btn.addEventListener("click", (e) => {
        // e.preventDefault();
        if (titulo.value !== "" && subtitulo.value !== "" && descripcion.value !== "") {
            let contador = localStorage.length;
            const storage = {
                titulos: titulo.value,
                subtitulos: subtitulo.value,
                descripciones: descripcion.value,
            };

            localStorage.setItem(`info ${contador + 1}`, JSON.stringify(storage));

        };
    });
}

// function to get the elements from the local storage
function getElements() {
    let contador = localStorage.length;
    let caja_contenido = document.querySelector("#caja1");
    for (let i = 1; i <= contador; i++) {
        let dataStorage = localStorage.getItem(`info ${i}`);
        // condition to check if there is any data in the local storage
        if (dataStorage) {
            let legible = JSON.parse(dataStorage);
            // if exists the data in local storage, the data is shown in the screen
            caja_contenido.innerHTML += `
                <div class="
                    art
                    h-40
                    py-3
                    px-5
                    w-full
                    bg-blue-400
                    overflow-hidden
                    text-center
                    flex 
                    justify-center
                    flex-wrap
                    flex-col
                    content-center
                ">
                    <h1 class="caja-titulo text-2xl font-bold text-gray-800 text-wrap h-1/4 w-full">${legible.titulos}</h1>
                    <h3 class=" max-h-7 truncate">${legible.subtitulos}</h3>
                    <button id="btn_pop_up${i}" class="h-1/4 w-full bg-blue-50 border border-black rounded-xl">
                        Ver<span id="pop_btn${i}" class="pop hidden bg-blue-300 fixed top-14 md:left-1/3 left-4 w-[90dvw] md:w-1/3 h-[60dvh] border border-black rounded-3xl shadow-lg shadow-gray-600">
                        <img src="./cross.svg" alt="cerrar" class="img__cross${i} w-auto h-8 absolute right-5 top-3 cursor-pointer>
                        <h1 class="text-2xl font-bold">${legible.titulos}</h1>
                        <h3>${legible.subtitulos}</h3>
                        <p>${legible.descripciones}</p>
                        </span>
                    </button>
                </div>`;
        }
    }

    // asssing the event listener to the pop-up button
    for (let i = 1; i <= contador; i++) {
        let btnPopUp = document.querySelector(`#btn_pop_up${i}`);
        let popUp = document.querySelector(`#pop_btn${i}`);
        let cross = document.querySelector(`.img__cross${i}`);

        btnPopUp.addEventListener("click", () => {
            if (popUp.classList.contains("hidden")) {
                popUp.classList.remove("hidden");
            } else if (!popUp.classList.contains("hidden")) {
                cross.addEventListener("click", () => {
                    popUp.classList.add("");//add custom class to hide the pop-up
                    // popUp.classList.remove("hidden");
                });
            }
        });
    }
}

getElements();
storageElements();