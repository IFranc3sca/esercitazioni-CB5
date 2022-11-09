const bodyEl = document.querySelector("body");
const container = document.querySelector(".cards");

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

//Esercizio 1
/*for (let i = 0; i <= 150; i++) {                      
   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
     .then((res) => res.json())
     .then((res) =>
       createCard(
         res.sprites.front_default,
         `#${res.id}`,
        res.name[0].toUpperCase() + res.name.slice(1),
         res.types[0].type.name,
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
      pokemon.types[0].type.name,
      container
    );
  })
);
