'use script';

let score = 20;
let highScore = 0;
let randomNum = Math.floor(Math.random()*20+1);
console.log(`random num: ${randomNum}`);

let displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    if(score <= 1) {
        if(score >= 1) score--;
        displayMessage("You loose!!");
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else if(!guess) {
        displayMessage("Number can't be empty!!");
    }
    else if(guess < 2 || guess > 19) {
        displayMessage("Invalid input!!");
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else if(guess === randomNum) {
        score--;
        displayMessage("Hurrah!! you got it right.");
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = randomNum;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess >= randomNum) {
        score--;
        guess > displayMessage('Too High!');
    }
    else if(guess <= randomNum) {
        score--;
        displayMessage('Too low!');
    }
    document.querySelector('.score').textContent = score;
});

// again button will place all things as it is was before.
document.querySelector('.again').addEventListener('click', function() {
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';    // this will set the guessed number as empty string.

    randomNum = Math.floor(Math.random()*20+1);
    score = 20; // also make the max score as it is when again button is clicked.
});