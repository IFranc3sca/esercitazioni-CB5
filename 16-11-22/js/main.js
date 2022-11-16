import { q, GET, POST, DELETE, createCard, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemon_List");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };
  POST(url, data).then(() => location.reload());
});

window.onload = GET(url).then((res) =>
  res.map((pkm) => {
    try {
      createCard(url, ul, pkm?.name, pkm?.type, pkm?.id);
    } catch (error) {
      console.log(error);
    }
  })
);
