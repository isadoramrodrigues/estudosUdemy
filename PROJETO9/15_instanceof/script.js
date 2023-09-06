class mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new mamifero(4);

console.log(coiote.patas);

class Cachorro extends mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log("au au");
    }
}

let pug = new Cachorro(4, "pug");

console.log(pug.patas);

console.log(coiote instanceof mamifero);