console.log('Bank is open for business')

//  initialise saving variables
var savingsBalance = document.querySelector('.savings-balance');
var savingsInput = document.querySelector('.savings-input');
var savingsWithdrawBtn = document.querySelector('.savings-withdraw-btn');
var savingsDepositBtn = document.querySelector('.savings-deposit-btn');
var savingsBox = document.querySelector('.savings-box')


savingsBalance.textContent = 500

// initialise checking variables
var checkingBalance = document.querySelector('.checking-balance');
var checkingInput = document.querySelector('.checking-input');
var checkingWithdrawBtn = document.querySelector('.checking-withdraw-btn');
var checkingDepositBtn = document.querySelector('.checking-deposit-btn');
var checkingBox = document.querySelector('.checking-box')


checkingBalance.textContent = 100

var warning = 'not enough money'

// initialise functions
var depositSavings = function() {
  savingsBalance.textContent = Number(savingsBalance.textContent) + Number(savingsInput.value);
  savingsInput.value = null;
  moreThanZeroBalance(checkingBalance, checkingBox, checkingInput);
}

var depositChecking = function() {
  checkingBalance.textContent = Number(checkingBalance.textContent) + Number(checkingInput.value);
  checkingInput.value = null;
  moreThanZeroBalance(checkingBalance, checkingBox, checkingInput);
}


var withdrawSavings = function() {

  withdraw(savingsBalance, savingsInput);
  zeroBalanceWarning(savingsBalance, savingsBox, savingsInput);
}

var withdrawChecking = function() {

  withdraw(checkingBalance, checkingInput);
  zeroBalanceWarning(checkingBalance, checkingBox, checkingInput);
}


savingsDepositBtn.addEventListener('click', depositSavings);
checkingDepositBtn.addEventListener('click', depositChecking);
savingsWithdrawBtn.addEventListener('click', withdrawSavings);
checkingWithdrawBtn.addEventListener('click', withdrawChecking);

var moreThanZeroBalance = function(accountBalance, accountBox, accountInput) {
  if (Number(accountBalance.textContent) !== 0) {
    accountBox.style.backgroundColor = '#CCC';
    accountInput.value =  null;
  }
}

var zeroBalanceWarning = function(accountBalance, accountBox, accountInput) {
  if (Number(accountBalance.textContent) === 0){
    accountBox.style.backgroundColor = 'red';
    accountInput.value =  null;
  }
}

var withdraw = function(accountBalance, accountInput) {
  if ((Number(accountBalance.textContent) - Number(accountInput.value)) >= 0) {
    accountBalance.textContent = Number(accountBalance.textContent) - Number(accountInput.value);
    accountInput.value = null;
  }
}
