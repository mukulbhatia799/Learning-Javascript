// A closure in JavaScript is a function that has access to the variables in its surrounding scope, even after the surrounding function has returned.
//A closure is a function having access to the parent scope, even after the parent function has closed.

/*

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

*/



// example 2: -

let f;

const func1 = function() {
    const a = 10;
    f = function() {
        console.log("value: " + a*2);
    }
}

const func2 = function() {
    const b = 49;
    f = function() {
        console.log("value in func2: " + b*2);
    }
}

func1();
f();
f();

// console. dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
console.dir(f);     // we can see that the f contains the func1 f(). But what if we call the func2(). Let's see.

func2();
f();            // when we called func2, f changed to func2 function f definition. Think like, for f that function definition is a value. And we are just changing the value of function f somewhere in another function.