// function looper(){
    // var est de scoope fonction
//     for(var i=0; i<5; i++){
//         console.log(i)

//     }
//     console.log(i)
// }
// looper()

// let est de scope bloc ie il sera visible uniquement dans le bloc
function calcul(){
    for (let i=0; i<6; i++) {
        console.log(i)
    }
    console.log(i)
}
calcul()
