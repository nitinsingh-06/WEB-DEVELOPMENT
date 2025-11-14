console.log("hgkhg")

let obj ={
    n:1,
    b:"harry"
}
console.log(obj)

// let animal = {
//     jump:true,

// }
// let rabit = {
//     eats:true
// }
// rabit.__proto__ = animal 
// console.log(animal,rabit)


class animal{
    constructor(name,food,from,plays){
        
        this.name = name
        this.food = food
        this.from = from
        this.plays = plays
        console.log("Object is Created : ")
    }
    eats(){
        console.log("kha raha hoon : ")
    }
    jumps(){
        console.log("Khood raha hai : ")
    }
}


class Lion extends animal{
    constructor(name,food,from,plays){

        super(name,food,from,plays)
        
        console.log("Object is created He is Lion ")
    }
    eats(){
        console.log("kha raha hai or roar")
    }
    work(){
        console.log("doing Hunting ")
    }
}

let a = new animal("Goat","Grass","Pahad",);
console.log(a)
let l = new Lion("King","Chicken","forest","Hunting");
console.log(l)
a.eats()
l.eats()
l.work()