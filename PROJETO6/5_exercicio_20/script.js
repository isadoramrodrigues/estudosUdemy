function verificacao(dado) {
    if(typeof dado === 'string') {
        console.log("este dado é uma string");
    } else if(typeof dado === 'number') {
        console.log("este dado é um number");
    } else if(typeof dado === 'boolean') {
        console.log("este dado é um boolean");
    }
}


verificacao(true);
verificacao(23);
verificacao("teste");
