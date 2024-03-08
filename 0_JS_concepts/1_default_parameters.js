'use script';

// let stuDetails = function(name, section='not assigned yet!', regNo)//default parameter value assigned in section
// {
//     console.log(`Welcome ${name}, Your section is ${section}. Your registration No is ${regNo}.`);
// }

// stuDetails('Mukul', 'D2323', 12322024);


// In javascript, we don't have call by value. Here, we only have call by reference.

function abc(value) {
    value++;
    console.log("inside abc(): ", value);
}
let value = 10;
abc(value);
console.log("outside abc(): ", value);