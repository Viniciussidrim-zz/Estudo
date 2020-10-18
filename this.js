funcition Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function () {
        return ("Meu nome é " + this.nome + " " + this.sobrenome);
    }
}