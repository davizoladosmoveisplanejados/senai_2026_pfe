const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número com casas decimais: "));
let round = Math.round(num);
console.log("O número arredondado é:", round);
    