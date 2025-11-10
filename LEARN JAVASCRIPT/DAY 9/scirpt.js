function createcard(title,cname,views,monthold,duration,thumbnail){
    let viewstr
    if(views<1000000){
        viewstr = views/1000 +"k"
    }
    else if(views>100000){
        viewstr = views/10000+"M"
    }

    let htmls = `<div class="card">
            <div class="image">
                <img style="border-radius: 7px; width: 150px    ;"
                    src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr} . ${monthold} month ago </p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + htmls
}


createcard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","codeWithHarry",7700000,4,"32:45","https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q")