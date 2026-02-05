const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");

let maior = nome.toUpperCase();
let menor = nome.toLowerCase();

console.log(maior, menor);