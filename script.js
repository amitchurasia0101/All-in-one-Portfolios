console.log("Script.js intialization");

let bgCol = document.querySelector(".container").children
console.log(bgCol);




function getRandomColor(){
    let val1 = 0 + Math.random()*150;
    let val2 = 0 + Math.random()*150;
    let val3 = 0 + Math.random()*150;
    return `rgb(${val1}, ${val2}, ${val3}`

}
Array.from(bgCol).forEach(e=>{
    e.style.background = getRandomColor();                                   
    e.style.color = "white";                                   
});
console.log(getRandomColor)


