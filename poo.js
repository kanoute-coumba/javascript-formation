class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    devorer(){
        return `${this.name} veut manger de la viande`
    }
    description(){
        return `${this.name} a ${this.age} ans`
    }
}

class Chat extends Animal{
    constructor(name,age,color=""){
        super(name, age)
        this.cena=color
    }
    myColor(){
        return `ma couleur est ${this.cena}`
    }
}

var milou =  new Chat("cookie",3, "gris")
console.log(milou.myColor())
console.log(milou.description())
var monAnimal = new Animal("Milo", 4)
console.log(monAnimal.devorer())