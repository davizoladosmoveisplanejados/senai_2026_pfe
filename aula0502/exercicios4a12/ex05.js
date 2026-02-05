const prompt = require('prompt-sync')();
let anoNasc = Number(prompt("Qual ano você nasceu?: "));
let date = new Date();
let ano = date.getFullYear();
let idade = ano-anoNasc;
console.log(idade)
