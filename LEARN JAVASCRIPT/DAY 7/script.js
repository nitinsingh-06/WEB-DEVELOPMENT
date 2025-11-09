console.log("Hello World ")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)
    e.style.backgroundColor = "green"
})
document.getElementsByTagName("div")