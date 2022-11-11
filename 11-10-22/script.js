const bodyEl = document.querySelector("body");
const container = document.querySelector(".cards");
const btnP = document.getElementById("idPrev");
const btnN = document.getElementById("idNext");
const bulbasaur = "https://pokeapi.co/api/v2/pokemon/1/";

//creo la card tramite questa funzione
const createCard = (imgUrl, id, name, type, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.classList.add(type);

  const idEl = document.createElement("span");
  idEl.textContent = id;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", name);
  imgEl.className = "img-container";

  const nameEl = document.createElement("h1");
  nameEl.textContent = name;

  const typeEl = document.createElement("h2");
  typeEl.textContent = `Type: ${type}`;
  cardEl.append(imgEl, idEl, nameEl, typeEl);
  parent.appendChild(cardEl);
};

//funzione per la fetch
const getPokemon = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) =>
      createCard(
        res.sprites.other.dream_world.front_default,
        `#${res.id.toString().padStart(3, "0")}`,
        res.name[0].toUpperCase() + res.name.slice(1),
        res.types[0].type.name,
        container
      )
    )
    .catch((e) => console.log("Error:" + e));
};

//stampo la prima card
getPokemon(bulbasaur);

//attribuisco un evento al bottone prev, non aggiungo il load perche' tanto non funziona :(
let i = 1;
btnP.addEventListener("click", () => {
  i--;
  if (i < 1) i = 1;
  getPokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`);
});

//attribuisco un avento al bottone next, e aggiungo il load che dovrebbe refreshare la pagina e stampare la nuova card
const onFirstLoad = () => {
  btnN.addEventListener("click", () => {
    i++;
    if (i > 150) i = 1;
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  });
  //commento la riga successiva poiche' non funziona il load quindi stamperebbe bulbasaur due volte
  // getPokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`);
};

window.onload = onFirstLoad;
