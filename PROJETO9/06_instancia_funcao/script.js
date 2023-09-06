function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("au au");
    }
    return cachorro;
}

let doberman = criarCachorro('doerman', 4, 'preta');

console.log(doberman);

doberman.latir();
