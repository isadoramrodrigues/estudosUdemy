const reg = /\w+: (Matheus|joão|Maria)/; // nome: nasuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
