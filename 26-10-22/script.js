//Esercizio 1
const array=["Francesca", "Leonardi", "25", "Diploma"];
console.log(array);
//Esercizio 2
array.splice(array.indexOf("25"), 2, "09-10-1997", "Diploma");
console.log(array);
array.splice(3);
const upper = array.map(element => {
    return element.toUpperCase();
});
upper.push("Diploma");
console.log(upper);
//Avanzato
let n = 7; 
let string = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);