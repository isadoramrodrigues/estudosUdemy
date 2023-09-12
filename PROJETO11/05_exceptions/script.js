function saudacao(nome) {

    if(typeof nome != 'string') {
        throw new error("o parametro nome precisa ser string");
    } else {
        console.log(`olá ${nome}.`);
    }
}

saudacao("isa");
saudacao(5);

console.log("teste");