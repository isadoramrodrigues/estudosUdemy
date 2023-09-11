class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;

    }

    abasetcer(l) {

        this.gasolinaRestante += l;
    }

}

let carro = new Carro("VW", "Cinza", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abasetcer(10);

console.log(carro);