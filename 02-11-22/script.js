import products from "./products.js";
const bodyEl = document.querySelector("body");

const mostpopularEl = document.querySelector(".most-popular");
const bestSellerEl = document.querySelector(".best-seller");

const heroEl = document.createElement("div");
heroEl.className = "hero";
const title = document.createElement("h1");
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "https://picsum.photos/300/200");
imgEl.setAttribute("alt", "image");
const heroMostPop = document.createElement("h1");
const heroBestSell = document.createElement("h1");

title.textContent = "Products List";
heroMostPop.textContent = "Most popular";
heroBestSell.textContent = "Best seller";

bodyEl.append(heroEl, mostpopularEl, bestSellerEl);
heroEl.append(imgEl, title);
mostpopularEl.appendChild(heroMostPop);
bestSellerEl.appendChild(heroBestSell);

const createCard = (title, imgUrl, description, category, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  if (category === "jewelery") {
    cardEl.classList.add("special-card");
  }

  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", category);

  const parEl = document.createElement("p");
  parEl.textContent = description;

  cardEl.append(titleEl, imgEl, parEl);
  parent.appendChild(cardEl);
};

products
  .filter((product) => product.rating.rate >= 3)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });

products
  .filter((product) => product.category === "electronics")
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      bestSellerEl
    );
  });
