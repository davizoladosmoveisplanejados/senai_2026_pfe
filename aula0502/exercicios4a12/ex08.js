const prompt = require('prompt-sync')();


let num = Number(prompt("Digite um número de 1 a 10: "));
let random = Math.round(Math.random()*10);
if(num == random){
    console.log("Os números são iguais!");
}else{
    console.log("Os números são diferentes!")
};