console.log('I am Promishes');

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("No Random Number was not Supporting you")
    }
    
    setTimeout(() => {
        console.log("Yes I am done")
        resolve("Nitin")
    }, 1000);
})
let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("No Random Number was not Supporting you 2")
    }
    
    setTimeout(() => {
        console.log("Yes I am done 2")
        resolve("Nitin 2 ")
    }, 1000);
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})  


let p3 = Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })