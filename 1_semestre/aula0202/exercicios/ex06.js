/* 6 - Dada a idade de uma pessoa, classifique:	
•	< 12: “criança”
•	>= 12 && < 18: “adolescente”
•	>= 18 && < 60: “adulto”
•	>= 60: “idoso” */

const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));
if (idade >= 60){
    console.log("Você é idoso!");
} else if (idade >= 18){
    console.log("Você é adulto!");
} else if (idade >=12){
    console.log("Você é adolescente!");
}else{
    console.log("Você é criança!")
};