
let list = [];
let arrayPar = [];
let arrayImpar = [];

let x = 0;

while (x < 50) {
    let numero = Math.floor((Math.random() * 100) + 1);
    list.push(numero);
    if (numero % 2 == 0) {
        arrayPar.push(numero)
    }
    else {
        arrayImpar.push(numero)
    }

    x++
}

console.log(list, arrayPar, arrayImpar)



