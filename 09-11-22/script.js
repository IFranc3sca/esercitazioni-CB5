/*const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};*/
const bodyEl = document.querySelector("body");
const container = document.querySelector(".cards");
//const col = Object.keys(colors);

const createCard = (imgUrl, id, name, type, parent) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  //cardEl.className = `bg-${type}`;  //prova per il bg color

  const idEl = document.createElement("span");
  idEl.textContent = id;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", name);
  imgEl.className = "img-container";

  const nameEl = document.createElement("h1");
  nameEl.textContent = name;

  const typeEl = document.createElement("h2");
  typeEl.textContent = type;
  /*for (let i = 0; i < col.length; i++) {     //prova non funzionante per il bg color
    if (col[i] === type) {
    //   cardEl.classList.add(`${type}`);
    }
  }*/
  cardEl.append(imgEl, idEl, nameEl, typeEl);
  parent.appendChild(cardEl);
};

//Esercizio 1
/*for (let i = 0; i <= 150; i++) {                      
   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
     .then((res) => res.json())
     .then((res) =>
       createCard(
         res.sprites.front_default,
         `#${res.id}`,
        res.name[0].toUpperCase() + res.name.slice(1),
         `Type: ${res.types[0].type.name}`,
         container
       )
     );
 }*/

//Esercizio 2
const pokemons = [];
for (let i = 1; i <= 150; i++) {
  pokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
}

let request = pokemons.map((url) => {
  return fetch(url).then((res) => res.json());
});

Promise.all(request).then((res) =>
  res?.map((pokemon) => {
    if (!pokemon) {
      console.log("Error: Pokemon doesn't exist");
      return null;
    }

    return createCard(
      pokemon.sprites.other.dream_world.front_default,
      `#${pokemon.id.toString().padStart(3, "0")}`,
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
      `Type: ${pokemon.types[0].type.name}`,
      container
    );
  })
);
