const myArray = ["banane", "pomme", "cerise", "poire", 4 ]

const cars = new Array("BMW","Citroen", "Renault")
// affiche les elements dans un tableau
console.log(myArray)
// affiche les elements en Chaine de caratere
console.log(myArray.toString())
// affiche en inserant le separateur indiqué dans les ""
// join(): joindre les items en mettant le separateur indique
console.log(myArray.join(", "))
console.log(cars)

// supprimer le dernier element du tableau 
// pop() supprime le dernier element et le sauvegarde
let voiture = cars.pop()
console.log(cars)
console.log(voiture)

// ajouter un element au tableau
let fruit = myArray.push("kiwi")
console.log(fruit) // return the length of the array
console.log(myArray) // return the new array

myArray [0] = "papaye"
console.log(myArray)

const boys = ["Amir", "Ibrahim", "Mohamed"]
const girls = ["Coumba", "Amina", "fatou"]

// concat attend un tableau
const myChildren = girls.concat(boys,cars)
console.log(myChildren)

// Créer une fonction qui prend un tableau 
// avec des nombres et retourne un tableau 
// avec les éléments multipliés par deux.

const multiple = (n) => {
 return n.map( item => item*2)
}

console.log(multiple([2,4,5]))

function multiplier(nombre) {
return nombre.map(function (i) {
    return i*10
})
}
console.log(multiplier([2,5, 8]))

// Fonction qui calcule la racine carrée des nombres d'un tableau

const racine = (n) => {
    return n.map( item => Math.sqrt(item) )
}
console.log(racine([4,25, 36]))


let semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];
semaine.pop()
// document.write(semaine)

semaine.push("dim")
// document.write(semaine)
semaine[1]= "mar"
document.write(semaine.length)

let fruits = ["Bannane","Fraises","Cerises","Poires"]


const quelFruit = prompt("Vous desirez acheter quel fruit?");
let trouve = false
let t = 0
for(let i in fruits){
if (quelFruit===fruits[i]) {
    fruits[t] = "";
    alert("OK")
    trouve = true
} 
t++
}
if (trouve===false){
    document.write("<br/> indisponible <br/>")
}

document.write(" <br/> 2e affichage <br/>")

let i=0
for (i in fruits){
    document.write(fruits[i]+"<br/>")
}

achatFruit();