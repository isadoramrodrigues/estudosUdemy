const validarId = /\d+ID\b/;

console.log(validarId.test("385636ID"));
console.log(validarId.test("2564584"));
console.log(validarId.test("asd"));
console.log(validarId.test("ID"));
console.log(validarId.test("555ID"));
