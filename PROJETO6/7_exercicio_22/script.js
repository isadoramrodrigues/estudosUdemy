function checarTamanhoTexto(texto) {
    if(texto.lenght > 10) {
        console.log("texto muito longo");
    } else {
        console.log("texto dentro do limite");
    }
    console.log(texto.lenght);
}

checarTamanhoTexto("teste");
checarTamanhoTexto("vamos testar se funiona");
checarTamanhoTexto("10-");
