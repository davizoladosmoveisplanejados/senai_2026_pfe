/* 8 - Receba uma nota (0–100) e transforme em conceito:
•	>= 90: A
•	>= 80: B
•	>= 70: C
•	>= 60: D
•	< 60: F */

const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite sua nota: "));
if (nota >= 90){
    console.log("Você tirou nota A!");
} else if (nota >= 80){
    console.log("Você tirou nota B!");
} else if (nota >= 70){
    console.log("Você tirou nota C!");
}else if (nota >= 60){
    console.log("Você tirou nota D!");
}else{
    console.log("Você tirou nota F");
};