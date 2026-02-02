/* 10 - Dado peso (kg) e altura (m), calcule o IMC peso / (altura ** 2) e classifique:
•	< 18.5: Abaixo do peso
•	>= 18.5 && < 25: Normal
•	>= 25 && < 30: Sobrepeso
•	>= 30: Obesidade */

const prompt = require('prompt-sync')();

let altura = Number(prompt("Digite sua altura (em metros): "));
let peso = Number(prompt("Qual o seu peso (em kg): "));

let imc = peso/ (altura**2)

if (imc >= 30){
    console.log("Você está obeso(a).");
} else if (imc >= 25){
    console.log("Você está com sobrepeso.");
}else if (imc >= 18.5){
    console.log("Seu peso está normal.");
}else{
    console.log("Você está abaixo do peso.")
}