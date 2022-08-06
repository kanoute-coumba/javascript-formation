const legume = ["carotte", "courgette", "haricot", "pomme de terre"]
// cree un nouveau tableau avec les 2 derniers elements de l'ancien legume.slice(2)
const legumeAime = legume.slice(1,3)
console.log(legumeAime)

const numbers = [2, 5, 6, 45, 67, 93]

let txt=""
// fonction callback c'est une fonction qui n'a pas de nom et est parametre d'une autre fonction
// forEach() returne des valeurs d'un tableau alors que map() returne un nouveau tableau
numbers.forEach( item => {
    txt += item + "<br/>"
    return txt
} )

document.write(txt)

const number2 = numbers.map(value => {
    return value*2
})
console.log(number2)

const maj = []
const ages = [2, 5, 6, 18, 20, 32]
// const majeur = ages.map( i => {
//     if(i>=18){
//         maj.push(i)
//     }
//     return maj
//     }
// )
// console.log(majeur)
const majeur = ages.filter( value => value>=18
    )
    console.log(majeur)

let somme = numbers.reduce( (total, value) => {
    return total+value
})
console.log(somme)
document.write(somme)

let majeur2 =  ages.every((value, index, array) =>{
    console.log(value, "value")
    console.log(array, "array")
    console.log(index, "index")
    return value>=2
})

console.log(majeur2,"majeur 2")


// destructuring : on cree une copie de ce tableau et pointe vers une reference diferrent
const names = ["reda", "coumba", "rama"]
const names2 = [...names]
console.log(names2, "names 2")
console.log(names,"names")
names2.push("aminata")
console.log(names2, "names 2")
console.log(names,"names")

