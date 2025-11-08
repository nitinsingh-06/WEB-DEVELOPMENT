

function factorial(n){
    if (n<0){
        return `factorial is not defined for -ve number ${n}`
    }
    else if (n==1 || n==0){
        return 1;
    }
    let result = n;
    for(let i = n-1;i>0;i--){
        result = result*i
    }
    return result   
}

let n = prompt("Enter a Number : ")
// console.log(factorial(n))
alert(`factorial of ${n} is ${factorial(n)}`)