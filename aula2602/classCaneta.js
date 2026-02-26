class Caneta{
    cor = "azul";
    marca = "BIC";
    ponta = "Grossa";
    qtdTinta = 5;
    tampa = false;
    
    escrever(){
        return 'Começou a escrever.';
    };
    sublinhar(valor){
        if (valor > this.qtdTinta){
            return 'Não há tinta suficiente para sublinhar.'
        }else{
            this.qtdTinta -= valor; //subtrai o valor da quantidade de tinta
            return 'Quantidade restante de tinta: '+ this.qtdTinta + 'ml';
        }
    }
};
const canetaGrossa = new Caneta();
console.log(canetaGrossa.escrever());
console.log(canetaGrossa.sublinhar(6));