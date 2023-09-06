let pessoa  = {
    "nome": "Matheus",
    "idade": 28,
    "profissao": "programador",
    "hobbies": ["video game", "leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

