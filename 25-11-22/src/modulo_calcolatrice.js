function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function differenza(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

module.exports = { somma, differenza, divisione, moltiplicazione };