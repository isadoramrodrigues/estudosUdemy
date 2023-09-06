class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    latir() {
        console.log("au au");
    }
}


Cachorro.prototype.patas = 4;

let labrador = new Cachorro('labrador', 4, 'amarelo');

console.log(labrador.patas);

labrador.latir();