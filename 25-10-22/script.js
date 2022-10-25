let firstNum = prompt("Inserisci il primo numero");
let secondNum = prompt("Inserisci il secondo numero");
let choice = prompt("scegli quale operazione svolgere tra addizione, sottrazione, moltiplicazione, divisione");

if(choice == "addizione"){
    console.log(parseInt(firstNum) + parseInt(secondNum));
}
 else if(choice == "sottrazione"){
    console.log(parseInt(firstNum) - parseInt(secondNum));
 }
 else if(choice == "moltiplicazione"){
    console.log(parseInt(firstNum) * parseInt(secondNum));
 }
 else if(choice == "divisione"){
    console.log(parseInt(firstNum) / parseInt(secondNum));
 }
 else{
    console.log("Scelta non valida");
 }