/* 9 - Dado um preco e um cupom ("BRONZE", "PRATA", "OURO"), aplique:
•	BRONZE: 5%
•	PRATA: 10%
•	OURO: 15% */

const prompt = require('prompt-sync')();

let preco = 1000;
let desconto = prompt("Digite o nome do cupom: ")
if (desconto == "BRONZE"){
    preco = preco*0.95
} else if (desconto == "PRATA"){
    preco = preco*0.9
}else if (desconto == "OURO"){
    preco = preco*0.85
}else{
    console.log("Cupom inválido");
}
console.log("O preço final é: R$", preco)