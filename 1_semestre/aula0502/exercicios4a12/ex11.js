const prompt = require('prompt-sync')();

let nome = prompt("Digite uma palavra: ");
let primeiras = nome.slice(0, 3);
let ultimas = nome.slice(-3);
console.log("As três primeiras letras são:", primeiras);

console.log("As três últimas letras são:", ultimas);
