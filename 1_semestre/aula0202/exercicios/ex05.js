const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
if (n1 || n2 == 0){
    console.log("Um dos números é igual a zero")
} else if (n2 > n1){
    console.log("O segundo número é maior")
} else if (n1 > n2){
    console.log("O primeiro número é maior.")
}else{
    console.log("Os números são iguais")
}