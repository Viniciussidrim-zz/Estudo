let peso = 26.3;
let status = "";

if (peso < 20.7){
    status = 'abaixo do peso';
} else if (peso >= 20.7 && peso < 26.4){
    status = 'Peso normal';
} else {
    status = 'Obeso';
}

console.log(status);

