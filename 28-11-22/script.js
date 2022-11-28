const inp = document.querySelector(".in");
const param1 = inp.number1;
const param2 = inp.number2;
const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resEl.textContent = "Risultato : " + data.result;
    });
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = param1.value;
    const par2 = param2.value;
    const par3 = btn[i].classList[1];
    let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`;
    GET(url);
  });
}
