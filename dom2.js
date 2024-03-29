const titre = document.getElementsByClassName("title")
console.log(titre,"mytitle")

const demo=document.getElementById("demo").innerHTML = "Hello World!";
console.log(demo,"mydemo")
document.getElementById('demo').style.color = 'red'

console.log(Array.isArray(titre)) // isArray() est un boolean qui teste si l'element est un array ou pas
console.log(Array.from(titre)) // pour convertir en tableau
console.log(Array.isArray(Array.from(titre)))

Array.from(titre).forEach(item => {
    console.log(item,'myitem')
})


//querySelector c'est pour accerder au css 
//nth-child est une fonction du css qui permet d'acceder à un enfant précis
const mySelector = document.querySelector("#liste-livre li:nth-child(2) .name")
console.log(mySelector,'monselector')

//rechercher tous les éléments HTML correspondant à un sélecteur CSS 
//spécifié (identifiant, noms de classe, types, attributs, valeurs des attributs, etc.), 
const bookList = document.querySelectorAll("#liste-livre li .name")
console.log(bookList,'my booklist')

console.log("Exercie")
console.log(Array.from(bookList))
Array.from(bookList).forEach( i => {
    i.textContent+= " Coumba"
    console.log(i,'exercice')
})

const books = document.querySelector("#liste-livre")
console.log(books,'mes books')
console.log(books.parentElement, " Parent") //le pere supreme
console.log(books.parentNode, " noeud parent")//le pere direct

