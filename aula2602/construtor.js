class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf
    };
};

const Davi = new Estudante('Davi', '2916', 66666666667);
console.log(Davi);
