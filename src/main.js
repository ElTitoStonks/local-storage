"use strict";

let titulo = document.querySelector("#titulo");
let subtitulo = document.querySelector("#subtitulo");
let descripcion = document.querySelector("#descripcion");
let btn = document.querySelector("#enviar");

function storageElements() {
    btn.addEventListener("click", (e) => {
        if (titulo.value !== "" && subtitulo.value !== "" && descripcion.value !== "") {
            let contador = localStorage.length;
            const storage = {
                titulos: titulo.value,
                subtitulos: subtitulo.value,
                descripciones: descripcion.value,
            };

            localStorage.setItem(`info ${contador + 1}`, JSON.stringify(storage));
        }
    });
}

function getElements() {
    let contador = localStorage.length;
    let caja_contenido = document.querySelector("#caja1");
    for (let i = 1; i <= contador; i++) {
        let dataStorage = localStorage.getItem(`info ${i}`);
        if (dataStorage) {
            let legible = JSON.parse(dataStorage);
            caja_contenido.innerHTML += `
                <div class="
                    art h-40 py-3 px-5 w-full bg-blue-400 overflow-hidden text-center flex justify-center flex-wrap flex-col content-center relative
                ">
                <span class="absolute w-8 right-3 top-2 cursor-pointer transition-all  ease-in-out duration-700 hover:rotate-180">
                    <img src="./cross.svg" class="cross-c${i}">
                </span>
                    <h1 class="caja-titulo text-2xl font-bold text-gray-800 text-wrap h-1/4 w-full">${legible.titulos}</h1>
                    <h3 class="max-h-7 truncate">${legible.subtitulos}</h3>
                    <button id="btn_pop_up${i}" class="h-1/4 w-full bg-blue-50 border border-black rounded-xl">
                        Ver
                        <span id="pop_btn${i}" class="pop__hidden ">
                            <img src="./cross.svg" alt="cerrar" class="img__cross${i} w-auto h-8 absolute right-5 top-3 cursor-pointer">
                            <div class="text-2xl font-bold my-5 px-8">
                            <h1>${legible.titulos}</h1>
                            </div>
                            <div class="h-auto w-full bg-blue-50 opacity-70 px-5 py-5 text-left text-xl mb-7 text-black/80">
                                <h3>${legible.subtitulos}</h3>
                            </div>
                            <div class="bg-white h-44 md:h-72 mb-10 text-left px-5 py-5 text-xl text-gray-600">
                            <p>${legible.descripciones}</p>
                            </div>
                        </span>
                    </button>
                </div>`;
        }
    }

    for (let i = 1; i <= contador; i++) {
        let btnPopUp = document.querySelector(`#btn_pop_up${i}`);
        let popUp = document.querySelector(`#pop_btn${i}`);
        let cross = document.querySelector(`.img__cross${i}`);
        let crosss = document.querySelector(`.cross-c${i}`);

        btnPopUp.addEventListener("click", () => {
            popUp.classList.add("pop");
            popUp.classList.remove("pop__hidden");
        });

        cross.addEventListener("click", (e) => {
            e.stopPropagation();  // Evita que el evento cierre se dispare al hacer clic en el botón Ver
            popUp.classList.add("pop__hidden");
            popUp.classList.remove("pop");
        });

        crosss.addEventListener("click", () => {
            localStorage.removeItem(`info ${i}`);
            window.location.reload();
        });
    }
}

getElements();
storageElements();
