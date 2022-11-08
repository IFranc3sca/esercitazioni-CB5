const bodyEl = document.querySelector("body");
const container = document.querySelector(".cards");

const createCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);
  imgEl.setAttribute("alt", data.name);
  imgEl.className = "img-container";

  const idEl = document.createElement("h3");
  idEl.textContent = `#${data.id}`;

  const nameEl = document.createElement("h1");
  nameEl.textContent = data.name[0].toUpperCase() + data.name.slice(1);

  const typeEl = document.createElement("h2");
  typeEl.textContent = `Type: ${data.types[0].type.name}`;

  //   if (data.types[0].type.name === "fire") {
  //     cardEl.classList.add("fire");
  //   } else if (data.types[0].type.name === "poison") {
  //     cardEl.classList.add("poison");
  //   } else if (data.types[0].type.name === "electric") {
  //     cardEl.classList.add("electric");
  //   } else if (data.types[0].type.name === "water") {
  //     cardEl.classList.add("water");
  //   } else if (data.types[0].type.name === "ground") {
  //     cardEl.classList.add("ground");
  //   } else if (data.types[0].type.name === "rock") {
  //     cardEl.classList.add("rock");
  //   } else if (data.types[0].type.name === "fighting") {
  //     cardEl.classList.add("fighting");
  //   } else if (data.types[0].type.name === "fairy") {
  //     cardEl.classList.add("fairy");
  //   } else if (data.types[0].type.name === "bug") {
  //     cardEl.classList.add("bug");
  //   } else if (data.types[0].type.name === "dragon") {
  //     cardEl.classList.add("dragon");
  //   } else if (data.types[0].type.name === "psychic") {
  //     cardEl.classList.add("psychic");
  //   } else if (data.types[0].type.name === "flying") {
  //     cardEl.classList.add("flying");
  //   } else if (data.types[0].type.name === "grass") {
  //     cardEl.classList.add("grass");
  //   } else {
  //     cardEl.classList.add("normal");
  //   }
  if (data.types[0].type.name === "fire") {
    cardEl.style = "background-color: #FDDFDF";
  } else if (data.types[0].type.name === "poison") {
    cardEl.style = "background-color:#98d7a5";
  } else if (data.types[0].type.name === "electric") {
    cardEl.style = "background-color: #FCF7DE";
  } else if (data.types[0].type.name === "water") {
    cardEl.style = "background-color:#DEF3FD ";
  } else if (data.types[0].type.name === "ground") {
    cardEl.style = "background-color: #f4e7da";
  } else if (data.types[0].type.name === "rock") {
    cardEl.style = "background-color: #d5d5d4";
  } else if (data.types[0].type.name === "fighting") {
    cardEl.style = "background-color: #E6E0D4";
  } else if (data.types[0].type.name === "fairy") {
    cardEl.style = "background-color:#fceaff ";
  } else if (data.types[0].type.name === "bug") {
    cardEl.style = "background-color: #f8d5a3";
  } else if (data.types[0].type.name === "dragon") {
    cardEl.style = "background-color: #97b3e6";
  } else if (data.types[0].type.name === "psychic") {
    cardEl.style = "background-color: #eaeda1";
  } else if (data.types[0].type.name === "flying") {
    cardEl.style = "background-color: #F5F5F5";
  } else if (data.types[0].type.name === "grass") {
    cardEl.style = "background-color: #DEFDE0";
  } else {
    cardEl.style = "background-color:#F5F5F5 ";
  }
  cardEl.append(imgEl, idEl, nameEl, typeEl);
  container.appendChild(cardEl);
};

fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) =>
      fetch(element.url)
        .then((r) => r.json())
        .then((data) => createCard(data))
    );
  });
