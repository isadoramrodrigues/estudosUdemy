const reg1 = /[12345]/;

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o númeor 2"));
console.log(reg1.test("temos o númeor 23"));
console.log(reg1.test("temos o númeor 60"));

const reg2 = /[0-9]/;

console.log(reg1.test("temos o númeor 645484848484848484"));
console.log(reg1.test("temos o númeor "));