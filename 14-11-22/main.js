//importo il file utils.js
import { q, d, GET } from "./utils.js";

const postId = q(".post-id");
const postTitle = q(".title");
const postBody = q(".text");
const btnPrev = d("idPrev");
const btnNext = d("idNext");

const url = "https://jsonplaceholder.typicode.com/posts";
let index = 1;

//aggiunge un evento al bottone previous e next e invoca la funzione getPost al click
btnPrev.addEventListener("click", (e) => {
  let instruction = e.target.textContent;
  getPost(instruction);
});

btnNext.addEventListener("click", (e) => {
  let instruction = e.target.textContent;
  getPost(instruction);
});

//funzione getPost che definisce come scorrono gli indici in base ai bottoni
const getPost = (instruction) => {
  if (!instruction) {
    instruction = 1;
  } else {
    instruction = instruction.toLowerCase();
  }

  switch (instruction) {
    case "prev":
      index = index - 1;
      break;
    case "next":
      index = index + 1;
      break;
    default:
      index = instruction;
  }

  //invoco get passando come parametro l'url e l'indice del post e definisco
  //il comportamento dei bottoni all'inizio e alla fine della lista di post
  GET(`${url}/${index}`).then((res) => {
    postId.textContent = res?.id;
    postTitle.textContent = res?.title;
    postBody.textContent = res?.body;

    if (index <= 1) {
      btnPrev.disabled = true;
      btnPrev.classList.add("disabled");
    } else {
      btnPrev.disabled = false;
      btnPrev.classList.remove("disabled");
    }

    if (index >= 10) {
      btnNext.disabled = true;
      btnNext.classList.add("disabled");
    } else {
      btnNext.disabled = false;
      btnNext.classList.remove("disabled");
    }
  });
};

window.onload = getPost();
