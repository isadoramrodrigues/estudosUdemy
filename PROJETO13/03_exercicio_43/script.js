const validaMarca = /MArca: (Nike|adidas|puma|asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asd"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("Marca: puma"));
