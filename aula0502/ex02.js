const prompt = require('prompt-sync')();

let idade = Number(prompt("Qual sua idade?: "));
if (idade < 16){
    console.log("Você não pode pegar livros emprestados!");
}else if (idade >= 18){
    console.log("Você é maior de idade e pode pegar livros emprestados!");
}else{
    console.log("Você não é maior de idade, mas pode pegar livros emprestados!");
}