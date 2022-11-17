import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];
let cards = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  const filteredByInput = productsList.filter((product) =>
    product.title.includes(inputValue)
  );
  filteredByInput.map((product) => createCardEl(product, cardList));
});

inputEl.addEventListener("input", (e) => {
  e.preventDefault();
  cardList.textContent = "";
  inputValue = "";
  inputValue += e.target.value;
  console.log(inputValue);
});
