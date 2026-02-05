const date = new Date();

let dataAtual = date;
let dataFinal = new Date("2026-12-31");

function calcularDias(dataAtual, dataFinal){

  const dataAtual_ms = dataAtual.getTime();
  const dataFinal_ms = dataFinal.getTime();

  const diferenca_ms = Math.abs(dataAtual_ms - dataFinal_ms);

  return Math.floor(diferenca_ms / 86400000);
}   
let numDias = calcularDias(dataAtual, dataFinal);
console.log("Faltam", numDias, "dias para o dia 31 de dezembro!");