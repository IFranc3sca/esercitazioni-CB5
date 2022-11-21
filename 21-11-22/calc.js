const argvs = process.argv;
const argv = argvs.slice(2);
const op = argv[0];
const a = argv[1];
const b = argv[2];

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

function sub(a, b) {
  return parseInt(a) - parseInt(b);
}

function mult(a, b) {
  return parseInt(a) * parseInt(b);
}

function div(a, b) {
  if (b != 0) return parseInt(a) / parseInt(b);
  else console.log("impossibile dividere per zero");
}

switch (op) {
  case "somma":
    let somma = sum(argv[1], argv[2]);
    console.log(somma);
    break;
  case "sottrazione":
    let sottr = sub(argv[1], argv[2]);
    console.log(sottr);
    break;
  case "moltiplicazione":
    let molt = mult(argv[1], argv[2]);
    console.log(molt);
    break;
  case "divisione":
    let divisione = div(argv[1], argv[2]);
    console.log(divisione);
    break;
  default:
    NaN;
    break;
}
