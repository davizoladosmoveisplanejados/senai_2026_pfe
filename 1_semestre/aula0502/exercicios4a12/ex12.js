const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let num = nome.length;
console.log("Seu nome tem:",num,"letras")