let cachorro = {
    patas: 4,
    nome: 'shark',
    latir: function() {
        console.log("au au");
    }
}


let vaca = {
    manchas: 'pretas',
    altura: 2,
    nome: 'manchinha',
    som: function() {
        console.log(" muuuuu");
    }
}

console.log(vaca.manchas);
console.log(vaca.altura);
console.log(vaca.nome);
vaca.som();



console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();


// [] = array
// {} = objeto