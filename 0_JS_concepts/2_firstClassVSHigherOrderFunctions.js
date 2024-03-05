'use script';

let changeColor = function() {
    console.log("this: ", this.style.border = "solid 10px green");
}

// higher order function:- that receives another function as an argument. like here addEventListener is a higher order function and changeColor is a callback function which call another function, or both. When addEventListener will be called, then only afterwards changeColor will be called.
document.querySelector("h1").addEventListener('click', changeColor);