function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function () {
        return ("Meu nome é " + this.nome + " " + this.sobrenome);
    }
}

// Criando um objeto a partir de uma função cosntrutora
var funcionario = new Pessoa ("Maria", "Peixoto");

// Acessando um objeto a partir de uma função contrutora
funcionario.nome = "Matheus";
funcionario.falar();