import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    //ho aggiunto questo campo al form in modo da consentire di inserire un id breve
    //poichè la funzione ne genera uno a 36 cifre
    id: element.pkmId.value,
    //id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

window.onload = GET(url).then((res) =>
  res.map(
    (pkm) =>
      (ul.innerHTML += `<li> ${pkm.id} ${pkm.name} Type:${pkm.type}</li>`)
  )
);
