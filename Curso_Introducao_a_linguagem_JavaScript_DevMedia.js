//Curso Introdução a linguagem JavaScript - DevMedia

// Aula 1
function ornitorinco (morango, laranja){
    return morango + laranja;
}

//Aula 2
//Somente motivos para aprender JS

//Aula 3
var aluno = "jacks"; //Variavél normal

aluno = { //Variavel Objeto
    nome: "Jacks Douglas",
    idade: 23
}

//Aula 4

var nome = "abc";
var Nome = "abc";

//Aula 5

//Estruturada
var n1 = 2;
var n2 = 4;
console.log(n1+n2);

//Orientada
var n1 = 2;
var n2 = 4;

var SOMA = function (n1, n2){
    return n1 + n2;
}
console.log (SOMA(n1, n2));

//Usando Framework 
class Calculadora extends Componet {
    constructor (props){
        super(props);
        this.somar = this.somar.bind(this);
    }
    somar (n1,n2){
        return n1 + n2;
    }
}

//Aula 6
//Uso do DOM e JS