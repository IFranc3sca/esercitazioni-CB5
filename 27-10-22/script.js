//Esercizio 1
function calculator(num1, num2, operation) {
    switch (operation) {
      case "addizione":
        return num1 + num2;
      case "sottrazione":
        return num1 - num2;
      case "moltiplicazione":
        return num1 * num2;
      case "divisione":
        return num1 / num2;
    }
  }

let num1 = prompt("Inserisci il primo numero");
let num2 = prompt("Inserisci il secondo numero");
let operation = prompt("scegli quale operazione svolgere tra addizione, sottrazione, moltiplicazione, divisione");
num1 = parseFloat(num1); 
num2 = parseFloat(num2);
let result = calculator(num1,num2,operation);
console.log(result);

//Esercizio 2
const character = {
    nome: "JigglyPuff",
    specie: "Pokemon",
    tipo: "normale folletto",
    pokedex: "kanto",
    evoluzione: "Wigglytuff",
    babypokemon: "Igglybuff"
};

console.log(Object.keys(character));
console.log(Object.values(character));
console.log(character.evoluzione);

//Avanzato
function nCalculator(op, numbers){
    switch (op) {
        case "addizione":
          let sum = 0;
          for(const n of numbers){
            return sum+= Number(n); 
          }
          console.log(sum);
        case "sottrazione":
          return num1 - num2;
        case "moltiplicazione":
          return num1 * num2;
        case "divisione":
          return num1 / num2;
      }
}

let result1 = nCalculator("addizione", [2,2,2]);
console.log(result1);