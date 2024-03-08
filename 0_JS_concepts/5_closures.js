// A closure in JavaScript is a function that has access to the variables in its surrounding scope, even after the surrounding function has returned.
//A closure is a function having access to the parent scope, even after the parent function has closed.

'use strict';

let func = function() {
    let value = 10;
    return function() {
        value++;
        console.log("value:" + value);
    }
}

let storingFunc = func();   // here, storingFunc is storing the returning function 
storingFunc();  // prints 11
storingFunc();  // prints 12
storingFunc();  // prints 13