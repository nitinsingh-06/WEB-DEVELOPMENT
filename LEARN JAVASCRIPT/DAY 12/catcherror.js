let a = prompt("Enter a First Number : ")
let b = prompt("Enter a second Number : ")


if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed")

}
let sum = parseInt(a) + parseInt(b)
console.log(`The sum of ${a} + ${b} is ${sum}`)


function main() {
    let d = 4; 
    try {
        console.log(`the multiplication of ${a} and ${b} is : ${d * b}`)
        return true
    } catch (error) {
        console.log("Oops Error Occured Please try again letter ")
        return false
    }
    finally {
        console.log("files are being closed and db connection is being closed ")
    }
}
let d = main()

