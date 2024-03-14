'use strict';

// ==================== for display ====================
const display_Main = document.querySelector('.main-body');
const display_currBalanceAmount = document.querySelector('.current-balance-amount');
const display_welcomeText = document.querySelector('.welcome-text');
const display_wrongCredentials = document.querySelector('.wrong-creadentials-text');
const display_transactionList = document.querySelector('.current-user-transactions');
const display_CreditedTransactions = document.querySelector('.in-total-credited');
const display_DebitedTransactions = document.querySelector('.out-total-debited');
const display_interestAmount = document.querySelector('.interest-amount');
const display_insufficientBalance = document.querySelector('.display-insufficient-balance');
const display_transferToUserNotFound = document.querySelector('.display-transfer-to-user-not-found');


// ===================== for input =====================
const input_userID = document.querySelector('.nav-user-id-input');
const input_userPin = document.querySelector('.nav-user-pin-input');

const input_TransferMoney_TransferTo = document.querySelector('.input-transfer-money-transfer-to');
const input_TransferMoney_Amount = document.querySelector('.input-transfer-money-amount');

const input_RequestLoan_Amount = document.querySelector('.input-request-loan-amount');

const input_CloseAccount_TransferTo = document.querySelector('.input-close-account-transfer-to');
const input_CloseAccount_Amount = document.querySelector('.input-close-account-amount');

// ======================= for btn =======================
const btn_UserCredentials = document.querySelector('.btn-user-credentials-login');
const btn_transferMoney = document.querySelector('.btn-transfer-money');
const btn_requestLoan = document.querySelector('.btn-request-loan');
const btn_closeAccount = document.querySelector('.btn-close-account');


// ====================== Functions ======================
const displayValidAccountInfo = function(accountHolder) {
    display_transactionList.innerHTML = ' ';
    display_wrongCredentials.style.display = "none";
    display_welcomeText.textContent = `Welcome, ${accountHolder.accountHolderName}`;
    display_Main.style.opacity = 100;


    accountHolder.userTransactions.forEach(function(mov, i) {
        const HTML = `
        <div class="user-transaction-details">
            <div class="deposit-withdraw-date">
                <span class="${mov > 0?'deposited':'withdrawal'}-transaction">${i+1} ${mov > 0?'DEPOSIT':'WITHDRAWAL'}</span>
                <span class="">TODAY</span>
            </div>
            <div class="current-transaction-amount">$${mov}.00</div>
        </div>
        <hr>
        `
        display_transactionList.insertAdjacentHTML('afterbegin', HTML);
    });

    // adding new Property userCurrentBalance in current logged in user Account object.
    accountHolder.userCurrentBalance = accountHolder.userTransactions.reduce((summ, value) => summ + value);
    accountHolder.userAllTimeCreditedAmount = accountHolder.userTransactions.filter(mov => (mov > 0)).reduce((summ, value) => summ + value);
    accountHolder.userAllTimeDebitedAmount = accountHolder.userTransactions.filter(mov => (mov < 0)).reduce((summ, mov) => summ + mov);

    display_currBalanceAmount.textContent = `$${accountHolder.userCurrentBalance.toFixed(2)}`;
    display_CreditedTransactions.textContent = `$${accountHolder.userAllTimeCreditedAmount.toFixed(2)}`;
    display_DebitedTransactions.textContent = `$${accountHolder.userAllTimeDebitedAmount.toFixed(2)}`;
}

let currentLoggedInAccount = undefined;
const checkForValidLoginOrNot = function(userid, userpin)
{
    for(let i = 0; i < allAccounts.length; i++)
    {
        const checkHolderName = allAccounts[i].accountHolderName.toLowerCase() === userid.toLowerCase();
        currentLoggedInAccount = allAccounts[i];
        const checkHolderPin = allAccounts[i].accountHolderPin === userpin;
        if(checkHolderName && checkHolderPin) {
            console.log("valid user!");
            console.log("Transactions of " + allAccounts[i].accountHolderName + " are: " + [...allAccounts[i].userTransactions]);

            // clears the input fields when login in.
            input_userID.value = input_userPin.value = '';

            // to remove focus when user enter after filling credentials.
            input_userPin.blur();

            displayValidAccountInfo(allAccounts[i]);
            break;
        }
        else if(i == allAccounts.length-1) {
            console.log("non a valid user!!");
            display_wrongCredentials.style.display = "block";
            // input_userID.style.border = '2px solid red';
            // input_userPin.style.border = '2px solid red';
        }
    }
};


// =========== current accounts in BESMART bank. ============
const account1 = {
    userTransactions: [100.00, 400.00, -30.50, 1000.75, -320, 200.24, 400.65, -432.345],
    accountHolderName: 'Mukul Bhatia',
    accountHolderPin: 1111,
    interestRate: 1.5,
};

const account2 = {
    userTransactions: [600.50, 450, -330.111, 900, -720.32],
    accountHolderName: 'Nikhil Bhatia',
    accountHolderPin: 2222,
    interestRate: 8.5,
};

const account3 = {
    userTransactions: [1000.00, 4400, -630, 1400.45, -3120.23],
    accountHolderName: 'Aman Kumar',
    accountHolderPin: 3333,
    interestRate: 11.5,
};

const allAccounts = [account1, account2, account3];



// ==================== Event Listeners ==================== 
btn_UserCredentials.addEventListener('click', function(e) {
    e.preventDefault(); // prevents form from submitting.
    const inputUserID = input_userID.value;
    const inputUserPin = Number(input_userPin.value);
    checkForValidLoginOrNot(inputUserID, inputUserPin);
});


btn_transferMoney.addEventListener('click', function(e) {
    e.preventDefault();
    const receiverAccount = input_TransferMoney_TransferTo.value;
    const sendingAmount = Number(input_TransferMoney_Amount.value);
    if(currentLoggedInAccount.userCurrentBalance < sendingAmount) {
        console.log("insufficient balance...");
        display_transferToUserNotFound.style.display = "none";
        display_insufficientBalance.style.display = "block";
        return ;
    }
    for(let i = 0; i < allAccounts.length; i++) {
        console.log(allAccounts[i].accountHolderName.toLowerCase().trim(),receiverAccount.toLowerCase().trim(), allAccounts[i].accountHolderName.toLowerCase() === receiverAccount.toLowerCase());
        if(allAccounts[i].accountHolderName.toLowerCase() === receiverAccount) {
            input_TransferMoney_TransferTo.value = input_TransferMoney_Amount.value = ' ';
            console.log("valid user!!");
            const deductionAmountFromCurrentUser = -1*sendingAmount;
            currentLoggedInAccount.userTransactions.push(deductionAmountFromCurrentUser);
            allAccounts[i].userTransactions.push(sendingAmount);
            displayValidAccountInfo(currentLoggedInAccount);
            break;
        }
        else if(i === (allAccounts.length-1)) {
            console.log("User not found in server!!");
            display_insufficientBalance.style.display = "none";
            display_transferToUserNotFound.style.display = "block";
        }
        input_TransferMoney_Amount.blur();
    }
});
btn_requestLoan.addEventListener('click', function(e) {
    e.preventDefault();
});
btn_closeAccount.addEventListener('click', function(e) {
    e.preventDefault();
});