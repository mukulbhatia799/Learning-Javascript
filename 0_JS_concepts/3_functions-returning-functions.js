'use strict';

function func() {
    console.log("I am function");
    return function func2() {
        console.log("I am function inside function.");
        return function func3() {
            console.log("func inside func inside func");
        }
    }
}
let storingFunc = func();
storingFunc();  // storingFunc contains func2().
console.log("=================");
func()();
console.log("=================");
func()()();