function func_somma() {
  const fai_somma = async () => {
    const url = "http://localhost:3000/somma?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);
    return await res.json();
  };
  let result = fai_somma();
  alert(result);
}

function func_sottrazione() {
  const fai_sottrazione = async () => {
    const url = "http://localhost:3000/sottrazione?param1=10&param2=2";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_sottrazione();
}

function func_moltiplicazione() {
  const fai_moltiplicazione = async () => {
    const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_moltiplicazione();
}

function func_divisione() {
  const fai_divisione = async () => {
    const url = "http://localhost:3000/divisione?param1=10&param2=2";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_divisione();
}
