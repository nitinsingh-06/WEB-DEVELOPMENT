let a = [1,17,93,45,18,10,7,64]

// for (i = 0; i<a.length;i++){
//     const element = a[i];
//     console.log(element)
    
// }


// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })    


// let obj = {
//     a: "Nitin",
//     b: "Singh",
//     c: "bagri"
// }
// for (const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key];
//         console.log(element)
//     }
// }



let arr = [10,17,18,45,64,93]

// let newarr = []
// for(let i = 0;i<arr.length;i++){
//     const element = arr[i];
//     newarr.push(element**2)
// }   
// let newarr = arr.map((e,index,array)=>{
//     return e**2
// })

let newarr = arr.map((e,index,array)=>{
    return e*2
})
console.log(newarr)

const greaterThanSeven = (e)=>{
    if(e>17){
        return true
    }
    else{
        return false
    }
}

console.log(arr.filter(greaterThanSeven))


let arr2 = [1,2,3,4,5,6]
const add = (a,b)=>{
    return a+b

}
console.log(arr2.reduce(add))

