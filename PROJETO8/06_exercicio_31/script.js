let nume = [1, 2, 3, 4, 5, 6];
let nume2= [1, 2, 3];

function verificaElementoArray(arr) {
    if(arr.length >= 5) {
        console.log("muitos elementos");
    } else {
        console.log("poucos elementos");
    }
}

verificaElementoArray(nume);
verificaElementoArray(nume2);