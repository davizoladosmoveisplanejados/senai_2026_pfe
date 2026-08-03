const prompt = require('prompt-sync')();
console.log('Calculadora Iniciada!');
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let op = prompt('Qual operação deseja realizar(+, -, *, / ): ');
const operacao = function (num1, num2, op){
    if (op == "+"){
        let soma = num1+num2;
        console.log("O resultado é: ", soma);
    } else if (op == "-"){
        let sub = num1-num2;
        console.log("O resultado é: ", sub);
    }else if (op == "*"){
        let mult = num1*num2;
        console.log("O resultado é: ", mult);
    } else if (op == "/"){
        let div = num1/num2;
        console.log("O resultado é: ", div);
    } else {
        console.log("Operação não identificada.");
    };
}
operacao(num1,num2, op);
 