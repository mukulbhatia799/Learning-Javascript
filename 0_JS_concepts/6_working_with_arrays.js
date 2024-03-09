'use strict';


// array methods: -
let arr = [1, 4, 6, 2, 8, 5, 5, 1];
console.log("==== slice() ====");
console.log(arr);
console.log(arr.slice(2));  // does not reflect/mutate on original array.
console.log(arr.slice(2, 4));
console.log(arr.slice(-4));

console.log("==== splice() ====");
console.log(...arr);
// splice(startIndex, countOf splicing indexes);
console.log(arr.splice(0, 3));    // reflects/will cut this part from the original array.
console.log(arr.splice(-1));
console.log(...arr);

console.log("==== reverse() ===="); // mutate the original array.
console.log(arr.reverse());

console.log("==== concat() ====");
let newarr = ['a', 'b', 'c'];
console.log(...arr.concat(newarr));

// alternate of concat()...
console.log(...arr, ...newarr);

console.log("==== join() ====");
console.log(...arr.join('-'));




// at method

console.log(...arr);
console.log(arr.at(2));     // At index 2 in arr array, we have 8.
let myName = "Mukul Bhatia";
console.log(myName.at(2));        // k




// looping arrays using forEach loop:- forEach() is a higher order function which requires a callback function. 

console.log("==== without forEach loop.");
for(let val of myName) {
    console.log(val);
}
console.log("==== forEach loop ====");
// works only for arrays, not for string type.
// inside forEach, we require a callback function which waits. Here, function() {} is a callback function.
// syntax of forEach:-
// forEach(function(value, index, entire array){}).
// drawback of forEach loop: we can't use break and continue in it. But, we can use it in for...of loop.
arr.forEach(function (value, index, arr) {
    console.log(`value at index: ${index} is ` + value);
});




// forEach with Maps and Sets.

// with Map
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['INR', 'Indian Rupee'],
]);

// forEach syntax when using it for map.
// forEach(function(value, key, map){}).
console.log("==== forEach in map ====");
currencies.forEach(function(value, key, map) {
    console.log(`Key: ${key}, value: ${value}`);
});

// with Set
const currenciesUnique = new Set(['USD', 'INR', 'EUR', 'USD', 'INR', 'EUR', 'USD', 'INR', 'EUR', 'USD', 'INR', 'EUR', 'TAR', 'CAH']);

// forEach syntax with Set
// forEach(value, underscore, Set) -> we give underscore because set neither have index nor keys, so underscore defines the 
console.log("==== forEach in set ====");
currenciesUnique.forEach(function (value) {
    console.log(value);
});