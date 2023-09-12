let b = 2;

try { 

    let a = 2 + b;

} catch(e) {

    console.log(e);
   //throw new console.error((e));

}  finally {

    console.log("Executou");
}

console.log('teste');