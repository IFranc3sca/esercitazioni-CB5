const url = "http://localhost:3000/attori";
const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const ul = document.querySelector(".actorsList");

const form = document.forms.actors;
const element = form.elements;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: element.id.value,
    name: element.nome.value,
    surname: element.cognome.value,
  };
});

window.onload = GET(url).then((res) =>
  res.map(
    (act) => (ul.innerHTML += `<li> ${act.id} ${act.nome} ${act.cognome}</li>`)
  )
);
