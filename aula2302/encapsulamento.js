class Pessoa{
    nome;//atributo publico
    #cpf = 1234567891; //atributo privado

    // metodos getter e setter
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
};

const estudante = new Pessoa();
estudante.nome = 'davizola original bro tuff gangsta';
estudante.setCpf(2222222220);
console.log('O cpf é:', estudante.getCpf());
console.log(estudante.nome);