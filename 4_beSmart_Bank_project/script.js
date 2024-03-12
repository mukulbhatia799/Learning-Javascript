'use strict';

// for display
const display_Main = document.querySelector('.main-body');
const display_currAmount = document.querySelector('.current-amount');
const display_welcomeText = document.querySelector('.welcome-text');
const display_wrongCredentials = document.querySelector('.wrong-creadentials-text');
const display_transactionList = document.querySelector('.current-user-transactions');


// for input
const input_userID = document.querySelector('.nav-user-id-input');
const input_userPin = document.querySelector('.nav-user-pin-input');

// for btn
const btn_submitArrow = document.querySelector('.submit-arrow');


// Functions

const displayValidAccountInfo = function(accountHolder) {
    display_transactionList.innerHTML = ' ';
    display_wrongCredentials.style.display = "none";
    display_welcomeText.textContent = `Welcome, ${accountHolder.accountHolderName}`;
    display_Main.style.opacity = 100;

    accountHolder.userTransactions.forEach(function(mov, i) {
        const HTML = `
        <div class="user-transaction-details">
            <div class="deposit-withdraw-date">
                <span class="${mov > 0?'deposited':'withdrawal'}-transaction">${mov > 0?'DEPOSIT':'WITHDRAWAL'}</span>
                <span class="">TODAY</span>
            </div>
            <div class="current-transaction-amount">$${mov}.00</div>
        </div>
        <hr>
        `
        display_transactionList.insertAdjacentHTML('afterbegin', HTML);
        // ======================
    });
    
}

const checkForValidAccountOrNot = function(userid, userpin)
{
    for(let i = 0; i < allAccounts.length; i++)
    {
        const checkHolderName = allAccounts[i].accountHolderName.toLowerCase() === userid.toLowerCase();
        const checkHolderPin = allAccounts[i].accountHolderPin === userpin;
        if(checkHolderName && checkHolderPin) {
            console.log("valid user!");
            displayValidAccountInfo(allAccounts[i]);
            break;
        }
        else if(i == allAccounts.length-1) {
            display_wrongCredentials.style.display = "block";
        }
    }
};


// current accounts in BESMART bank.
const account1 = {
    userTransactions: [100, 400, -30, 1000, -320, 200, 400, -432],
    accountHolderName: 'Mukul Bhatia',
    accountHolderPin: 1111,
};

const account2 = {
    userTransactions: [600, 450, -330, 900, -720],
    accountHolderName: 'Nikhil Bhatia',
    accountHolderPin: 2222,
};

const account3 = {
    userTransactions: [1000, 4400, -630, 1400, -3120],
    accountHolderName: 'Aman Kumar',
    accountHolderPin: 3333,
};

const allAccounts = [account1, account2, account3];


// Event Listeners
btn_submitArrow.addEventListener('click', function() {
    const inputUserID = input_userID.value;
    const inputUserPin = Number(input_userPin.value);
    checkForValidAccountOrNot(inputUserID, inputUserPin);
});