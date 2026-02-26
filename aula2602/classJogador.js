class Jogador{//classe-mãe
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    };
    treinar(){
        return '3x na semana!';
    };
    getNome(){
        return this.#nome;
    };
    getNumero(){
        return this.#numero;
    };
};

//classe jogadorFutebol - filha
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero){
        super(nome, numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    };
    driblar(){
        return 'Tomou uma caneta';
    };
    fazerGol(qtdGols){
        return this.#totalGols += qtdGols
    };
    //super acessa atributos e metodos da classe mãe
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols'
    }
};
const jogador = new JogadorFutebol('esquerdo', 20, 'Kelvin Destaque', 7);
jogador.fazerGol(2);
console.log(jogador.mostrar());

class JogadorFutebolAmericano extends Jogador{
    #listaJogadas;
    #jardasConquistadas;
    constructor(listaJogadas, jardasConquistadas, nome, numero){
        super(nome, numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    };
    fazerTouchdown(){
        return 'O jogador número ' + super.getNumero() + ' fez um Touchdown!';
    };
    bloquear(){
        return 'O jogador ' + super.getNome() + 'recebeu um tackle!';
    };
    correrJardas(valor){
        return this.#jardasConquistadas += valor
    };
    mostrar(){
        return 'O jogador ' + super.getNome() + ' fez a jogada ' + this.#listaJogadas + ' e ganhou ' + this.#jardasConquistadas + ' jardas' 
    }
};
const jogadorFutebolAmericano = new JogadorFutebolAmericano('Passe Longo', 45, 'Patrick Mahomes', 15);
jogadorFutebolAmericano.correrJardas(15);
console.log(jogadorFutebolAmericano.mostrar());

class JogadorBasquete extends Jogador{
    #alturaSalto;
    #totalCestas;
    constructor(alturaSalto, totalCestas, nome, numero){
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    };
    arremessar(){
        return 'O jogador nome ' + super.getNome() + ' e número ' +  super.getNumero() + ' arremessou a bola!';
    };
    fazerEnterrada(){
        return 'O jogador nome ' + super.getNome() + ' e número ' +  super.getNumero() + ' enterrou a bola!';
    };
};
const jogadorBasquete = new JogadorBasquete(90, 15, 'LeBron James', 23);
console.log(jogadorBasquete.arremessar());
console.log(jogadorBasquete.fazerEnterrada());