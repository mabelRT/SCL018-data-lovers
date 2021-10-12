import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

// Función para aparecer y desaparecer páginas
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

document.getElementById("buttonEnter").addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

// Evento onclick para redireccionar a páginas
/* document.getElementById('buttonTrailer').onclick = () => {
    location.href = "https://www.youtube.com/watch?v=E8cXKMR9a1Q&ab_channel=JoyasDeLaAnimaci%C3%B3n"
    }

document.getElementById('buttonSynopsis').onclick = () => {
    location.href = "https://www.sensacine.com/series/serie-11561/"
    }
 */

// Llamar personajes
/* rickandmorty.forEach(function(personajes) {
    console.log(personajes.name);
}); */

console.log(data);
const rickandmorty = data.results;
console.log(rickandmorty);
console.log("rickandmorty", rickandmorty);
const div = document.getElementById("root");

const drawCard = (rickandmorty) => {
return `<div class="card">
<ol>
<li>Nombre: ${rickandmorty.name}</li>
<li>Especie: ${rickandmorty.species}</li>
<li>Estatus: ${rickandmorty.status}</li>
</ol>
</div>`;
};

for (let i=0; i < rickandmorty.length; i++) {
div.innerHTML += drawCard(rickandmorty[i]);
};

// <li>Episodio: ${rickandmorty.episode}</li>