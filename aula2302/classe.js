class Carro{
    //atributos
    modelo = 'Palio';
    marca = 'Fiat';
    ano = 2008;
    preco = 15000;

    //metodos
    mover(){
        console.log("Estou me movendo!");
    };
    mostrar(){
        console.log('O carro é do modelo:', this.marca, this.modelo, this.ano, this.preco)
    }
};

const Caminhonete = new Carro();//instanciar a classe = criar o objeto
Caminhonete.mover();//utilizar metodos
Caminhonete.mostrar();//utilizar metodos