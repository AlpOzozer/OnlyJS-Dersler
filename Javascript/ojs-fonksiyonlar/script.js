/*
function login() {
   console.log("Giriş yapıldı"); 
}


function learningStatus(name) {
    console.log("Merhaba, ben " + name);
}

const name = "Ahmet";

learningStatus(name);
*/

function sum(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;

    return result;
}

const firstNumberPrompt = prompt("İlk sayıyı girin");
const secondNumberPrompt = prompt("İkinci sayıyı girin");

const firstNumber = Number(firstNumberPrompt);
const secondNumber = Number(secondNumberPrompt);

const calculation = sum(firstNumber, secondNumber);

console.log(calculation, "hesaplama işleminin sonucudur")

