let arr = [1,2,3,4,5];
let arr2 = [2,4,6,8];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("o array precisa ter pelo menos um elemento");
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

function arrayVazio(arr) {
    if(arr.length > 0) {
        throw Error("o array não pode ter elemnetos");
    } else {
        console.log("agora deu certo");
    }
}

iterarArray(arr);
iterarArray(arr2);