const personName = ["Coumba", "Fatou", "Reda", "Amina"]
// elle fait une modification ou une suppression
// array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
personName.splice(0, 2)
console.log(personName)

// const est plus sécurisé que let; on ne peut pas modifier sa valeur