


let students = ["shubh","Nitin","Virat","Shivangi","Shubham","Krishnanendu",
    "Ravindra","Shivesh","Kaif","Rishabh",

]

let Houses = []


for (const student of students){
    if(student.length <6){
        Houses.push("Gryfindor")
    }
    else if (student.length < 8){
        Houses.push("Hufflepuff")
    }
    else if (student.length < 8){
        Houses.push("Revenclaw")
    }
    else{
        Houses.push("Stythrin")
    }
}
console.log(Houses)