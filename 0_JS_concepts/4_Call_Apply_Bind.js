'use strict';

const flightDetails = {
    name: 'India Airlines',
    route: 'Delhi to Chandigarh',
    timings: '3pm to 9pm',
    display(price, passengerName) {
        console.log(`${this.name}, ${this.route}, ${this.timings} is booked by ${passengerName} cost $${price}.`);
    }
};

const flight2 = {
    name: 'Bharat Airlines',
    route: 'Jaipur to Bombay',
    timings: '5pm to 12pm'
};

const flight3 = {
    name: 'Vande Bharat Airlines',
    route: 'Jammu to Andaman',
    timings: '3am to 2pm'
}
const f1 = flightDetails.display;
f1.call(flightDetails, 1200, 'Nikhil');
f1.call(flight2, 1200, 'Nikhil');
f1.call(flight3, 1200, 'Nikhil');

f1.apply(flightDetails, [1200, 'Nikhil']);
f1.apply(flight2, [1200, 'Nikhil']);
f1.apply(flight3, [1200, 'Nikhil']);