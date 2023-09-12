const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asasasas"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("1515151515151515155138"));