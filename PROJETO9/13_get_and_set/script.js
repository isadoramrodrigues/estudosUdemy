class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    latir() {
        console.log("au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor;
    }
}


let pastor = new Cachorro('Pastor Alemão', 'sem cor');

console.log(pastor);

pastor.setCor = 'Marrom';

console.log(pastor.getCor);
