const prompt = require('prompt-sync')(); 
let pontuacao = Number(prompt("Qual a nota do aluno?: "));
function nota(pontuacao){
    let notafinal = (pontuacao/2)**2;
    console.log("A pontuação final foi:", notafinal);
};
nota(pontuacao);
