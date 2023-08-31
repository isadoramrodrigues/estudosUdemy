function multiplicarTresnumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresnumeros(2,3,4));

const mult = multiplicarTresnumeros(5,4,8);

console.log("o valor de mult é " + mult);


function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(15, true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,10));