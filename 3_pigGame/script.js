'use script';

let player1CurrentScore = 0, player2CurrentScore = 0;
let player1TotalScore = 0, player2TotalScore = 0;

const diceImage = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const btnPlayer1CurrentScore = document.querySelector('#current--0');
const btnPlayer2CurrentScore = document.querySelector('#current--1');
const btnPlayer1TotalScore = document.querySelector('#score--0');
const btnPlayer2TotalScore = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

let diceRolled = function() {
    diceImage.classList.remove('display--none');
    if(player1TotalScore >= 100) {
        alert("Player1 won!!, start the new game.");
    }
    else if(player2TotalScore >= 100) {
        alert("Player2 won!!, start the new game");
    }
    else {
        let randomNumber = Math.floor(Math.random()*6)+1;
        diceImage.setAttribute('src', './images/dice-'+randomNumber+'.png');
        // we can also write upper statement as..
        // diceImage.src = `./images/dice-${randomNumber}.png`;
        console.log(`random Number is ${randomNumber}`);
    
        if(player1.classList.contains('player--active')) {
            player1CurrentScore += randomNumber;
            btnPlayer1CurrentScore.textContent = player1CurrentScore;
        }
        else {
            player2CurrentScore += randomNumber;
            btnPlayer2CurrentScore.textContent = player2CurrentScore;
        }
        if(randomNumber === 1) {
            switchPlayer();
        }
    }
}

let switchPlayer = function() {
    if(player1.classList.contains('player--active')) {
        player1TotalScore += player1CurrentScore;
        btnPlayer1TotalScore.textContent = player1TotalScore;
        player1CurrentScore = 0;
        btnPlayer1CurrentScore.textContent = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    }
    else {
        player2TotalScore += player2CurrentScore;
        btnPlayer2TotalScore.textContent = player2TotalScore;
        player2CurrentScore = 0;
        btnPlayer2CurrentScore.textContent = 0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
}

let startNewGame = function() {
    btnPlayer1TotalScore.textContent = 0;
    btnPlayer2TotalScore.textContent = 0;
    btnPlayer1CurrentScore.textContent = 0;
    btnPlayer2CurrentScore.textContent = 0;
    diceImage.classList.add('display--none');   
    player1CurrentScore = player2CurrentScore = 0;
    player1TotalScore = player2TotalScore = 0; 
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
}

btnRoll.addEventListener('click', diceRolled);

btnHold.addEventListener('click', switchPlayer);

btnNewGame.addEventListener('click', startNewGame);