let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
   if(popbutton.classList.contains("pop")){
        popbutton.classList.remove("pop")
    }else{
    popbutton.classList.add("pop")
}})
let bigbutton = document.querySelector("#bigbutton")
bigbutton.addEventListener("click", e => { 
    console.log("big button got bigger")
    if(bigbutton.classList.contains("big")){
        bigbutton.classList.remove("big")
    }else{
    bigbutton.classList.add("big")
}})

let fancybutton = document.querySelector("#fancybutton")
fancybutton.addEventListener("click", e => {
    console.log("fancy button got fancier")
 if(fancybutton.classList.contains("fancy")){
        bigbutton.classList.remove("fancy")
    }else{
    fancybutton.classList.add("fancy")
        
    }})

let negativebutton = document.querySelector("#negativebutton")
negativebutton.addEventListener("click", e => {
    console.log("negative button got clicked")
   if(negativebutton.classList.contains("negativebutton")){
        negativebutton.classList.remove("negative")
    }else{
    negativebutton.classList.add("negative")
}})


let ownbutton = document.querySelector("#ownbutton");
ownbutton.addEventListener("click", e =>{
    console.log("Own button works")
   if(ownbutton.classList.contains("own")){
        bigbutton.classList.remove("own")
    }else{
    ownbutton.classList.add("own")
}})

