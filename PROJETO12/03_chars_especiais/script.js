const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("  "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("asd"));

const dRegex = /\d/; //[0-9]

console.log('d');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));


const dRegex2 = /\D/; //[^0-9]

console.log('D');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const sRegex = /\s/;

console.log('s');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const wRegex = /\w/;

console.log('w');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));