const btn = document.getElementById("btn-generator");
const advice = document.getElementById("advice");
const id = document.getElementById("ide");
const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => card(res))
    .catch((e) => console.log("Error:" + e));
};

const card = (res) => {
  id.textContent = `ADVICE #${res.slip.id}`;
  advice.textContent = res.slip.advice;
};

const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    getAdvice(urlAdvice);
  });

  getAdvice(urlAdvice);
};

window.onload = onFirstLoad;
