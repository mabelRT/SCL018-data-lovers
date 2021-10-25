import data from './data/rickandmorty/rickandmorty.js';
import {sortData, filterDataSpecies, filterDataStatus} from './data.js';

// Función para aparecer y desaparecer páginas
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

// Botón INGRESAR
document.getElementById("buttonEnter").addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

// Botón VOLVER
document.getElementById("buttonBack").addEventListener("click", () => {
    secondPage.style.display = "none";
    firstPage.style.display = "block";
});

// Llamar personajes
// <li>Episodio: ${rickandmorty.episode}</li>

const rickandmorty = data.results;
const printCharacters = document.getElementById("root");

const drawCard = (rickandmorty) => {
return `
<section class="card">
<img src="${rickandmorty.image}" alt="imagen del personaje" class="cardImage">
<ul>
<p class="cardText">${rickandmorty.name}</p>
<p class="cardText">Especie: ${rickandmorty.species}</p>
<p class="cardText">Estatus: ${rickandmorty.status}</p>
</ul>
</section>`;
};

/* for (let i=0; i < rickandmorty.length; i++) { */
    for (let i=0; i < rickandmorty.length; i++) {
printCharacters.innerHTML += drawCard(rickandmorty[i]);
}



// SortBy

const orderOption = document.querySelector(".orderedBox");

orderOption.addEventListener("change", (event) => {
    const chosenOrder = sortData(data,data.results.name, event.target.value);
    const print = () => { 
        printCharacters.innerHTML = "";
        for (let i=0; i < data.results.length; i++) {
            printCharacters.innerHTML += drawCard(data.results[i]);
            }
    }
    print(chosenOrder);
});



//filtro de especies
//accseso a la clase
const filterSpecie = document.querySelector(".filterBoxSpecies");
//registramos el evento change
filterSpecie.addEventListener("change", (event) => {
    //event.target optiene el elemento donde ocurrio el evento
   const species = filterDataSpecies(data.results, event.target.value);
   printCharacters.innerHTML = "";  
   
    const filter = () => {
       
        for (let i=0; i < species.length; i++) {
            printCharacters.innerHTML += drawCard(species[i]);
            }
    }
    filter(species);
});


//filtro estado
const filterStatus = document.querySelector(".filterBoxStatus");
filterStatus.addEventListener("change", (event) => {
    const status = filterDataStatus(data.results, event.target.value);
    printCharacters.innerHTML = "";
    const filter = () => {
       
        for (let i=0; i < status.length; i++) {
            printCharacters.innerHTML += drawCard(status[i]);
        }
    }
    filter(status);
});

//boton limpiar funcional(no limpia los selct)
const buttonCleanReset = document.getElementById("buttonClean");

buttonCleanReset.addEventListener("click", () => {
    printCharacters.innerHTML = "";
    function clean() {

        for (let i = 0; i < data.results.length; i++) {
            printCharacters.innerHTML += drawCard(data.results[i]);
        }
    }
    clean(data.results);

});
buttonCleanReset.addEventListener("click", () =>{
    
})