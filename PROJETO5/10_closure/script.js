function lembarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soam1 = lembarSoma(2);

console.log(soam1(5));


let soam2 = lembarSoma(5);

console.log(soam2(7));

function contador(i) {
    let cont = i;
    let soamarContador = function() {
        console.log(cont);
        cont++;
    }
    return soamarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1);
meuContador2();
meuContador2();
meuContador2();
meuContador2();
