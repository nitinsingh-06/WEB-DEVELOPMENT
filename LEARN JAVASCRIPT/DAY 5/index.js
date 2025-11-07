let arr = [1,5,4,8,7]
console.log(arr)
arr[0] = 456
console.log(arr)

console.log(arr.length)
console.log()
console.log(typeof arr)
console.log(arr.sort())
console.log(arr.toString())
console.log(arr.join(" And "));

let a = [1,2,3,4,5,7,8]
// console.log(a)

// console.log(a.pop())
console.log(a)
a.push("Nitin")
console.log(a)
a.shift()
console.log(a)
a.unshift("kohli")
console.log(a)
delete a[3]
console.log(a)

a[3] = "Bagri"
console.log(a)


let numbers = [1,2,3,4,5,6,7,8]

numbers.splice(1,4,22,54,45,18,49)
console.log(numbers)
 

let num = [1,2,3,4]
num.slice(1,3)
console.log(num)
