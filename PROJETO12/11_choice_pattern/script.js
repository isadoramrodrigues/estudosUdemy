const validaComnio = /www.\w+\.com.br|.com/;

console.log(validaComnio.test("www.google.com"));
console.log(validaComnio.test("www.google.com.br"));
console.log(validaComnio.test("www.google"));