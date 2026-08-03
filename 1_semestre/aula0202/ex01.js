const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite outro número: '));

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1*num2;
let div = num1/num2;

console.log('Os números são:', num1, "e", num2)

console.log('A soma dos números é:', soma);

console.log('A subtração dos números é:', sub);

console.log('A multiplicação dos números é:', mult);

console.log('A divisão dos números é:', div);