const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("auuuuuuuuuu");
    },
    rosnar: function() {
        consolelog("grrrr");
    },
    setRaca: function(raca) {
        this.raca;
    },
    getRaca: function() {
        return "a raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('pastor alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());
