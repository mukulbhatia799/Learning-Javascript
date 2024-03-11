'use strict';

// for display
const display_Main = document.querySelector('.main-body');
const display_currAmount = document.querySelector('.current-amount');
const display_welcomeText = document.querySelector('.welcome-text');


// for input
const input_userID = document.querySelector('.nav-user-id-input');
const input_userPin = document.querySelector('.nav-user-pin-input');

// for btn
const btn_submitArrow = document.querySelector('.submit-arrow');


// Functions
const checkForAccount = function(userid, userpin)
{
    allAccounts.forEach(mov)
}


// current accounts in BESMART bank.
const account1 = {
    userTransactions: [100, 400, -30, 1000, -320],
    accountHolderName: 'Mukul Bhatia',
    accountHolderPin: 1111,
    accountHolderUserID: 'mb'
};

const account2 = {
    userTransactions: [600, 450, -330, 900, -720],
    accountHolderName: 'Nikhil Bhatia',
    accountHolderPin: 1111,
};

const account3 = {
    userTransactions: [1000, 4400, -630, 1400, -3120],
    accountHolderName: 'Aman Kumar',
    accountHolderPin: 1111,
};

const allAccounts = [account1, account2, account3];


// Event Listeners
btn_submitArrow.addEventListener('click', function() {
    const inputUserID = input_userID.textContent;
    const inputUserPin = input_userPin.textContent;
    checkForAccount(inputUserID, inputUserPin);
});
