// function looper(){
    // var est de scoope fonction
//     for(var i=0; i<5; i++){
//         console.log(i)

//     }
//     console.log(i)
// }
// looper()

// let est de scope bloc ie il sera visible uniquement dans le bloc
// function calcul(){
//     for (let i=0; i<6; i++) {
//         console.log(i)
//     }
//     console.log(i)
// }
// calcul()


function exampleVar() {
    var x = 5;
    if (true) {
        var x = 10; // La variable x est redéclarée dans la même portée.
        console.log(x); // Affiche 10
    }
    console.log(x); // Affiche 10, pas 5
}
exampleVar()

function exampleLet() {
    let y = 5;
    if (true) {
        let y = 10; // Une nouvelle variable y est créée dans ce bloc.
        console.log(y,'y let '); // Affiche 10
    }
    console.log(y); // Affiche 5, pas 10
}

exampleLet()

function exampleConst() {
    const z = 5;
    // z = 10; // Cela provoquera une erreur, car z ne peut pas être réassignée.
    console.log(z,'z const'); // Affiche 5
}

exampleConst()

