'use script';

let player1CurrentScore = 0, player2CurrentScore = 0;
let player1TotalScore = 0, player2TotalScore = 0;

let diceRolled = function() {
    if(player1TotalScore >= 100) {
        alert("Player1 won!!, start the new game.");
    }
    else if(player2TotalScore >= 100) {
        alert("Player2 won!!, start the new game");
    }
    else {
        let randomNumber = Math.floor(Math.random()*6)+1;
        document.querySelector('.dice').setAttribute('src', './images/dice-'+randomNumber+'.png');
        console.log(`random Number is ${randomNumber}`);
    
        let player1 = document.querySelector('.player--0');
        let player2 = document.querySelector('.player--1');
        if(player1.classList.contains('player--active')) {
            player1CurrentScore += randomNumber;
            document.querySelector('#current--0').textContent = player1CurrentScore;
        }
        else {
            player2CurrentScore += randomNumber;
            document.querySelector('#current--1').textContent = player2CurrentScore;
        }
        if(randomNumber === 1) {
            if(player1.classList.contains('player--active')) {
                player1TotalScore += player1CurrentScore;
                document.querySelector('#score--0').textContent = player1TotalScore;
                player1CurrentScore = 0;
                document.querySelector('#current--0').textContent = 0;
                player1.classList.remove('player--active');
                player2.classList.add('player--active');
            }
            else {
                player2TotalScore += player2CurrentScore;
                document.querySelector('#score--1').textContent = player2TotalScore;
                player2CurrentScore = 0;
                document.querySelector('#current--1').textContent = 0;
                player2.classList.remove('player--active');
                player1.classList.add('player--active');
            }
        }
    }
}

let startNewGame = function() {
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.dice').classList.add('display--none');   
    player1CurrentScore = player2CurrentScore = 0;
    player1TotalScore = player2TotalScore = 0; 
}

document.querySelector('.btn--roll').addEventListener('click', diceRolled);

document.querySelector('.btn--new').addEventListener('click', startNewGame);