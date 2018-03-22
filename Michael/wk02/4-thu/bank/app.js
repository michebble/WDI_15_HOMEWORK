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
}

var depositChecking = function() {
  checkingBalance.textContent = Number(checkingBalance.textContent) + Number(checkingInput.value);
  checkingInput.value = null;
}

var withdrawSavings = function() {
  if ((Number(savingsBalance.textContent) - Number(savingsInput.value)) >= 0) {
    savingsBalance.textContent = Number(savingsBalance.textContent) - Number(savingsInput.value);
    savingsInput.value = null;
  }
  if (Number(savingsBalance.textContent) === 0){
    console.log('oops');
    savingsBox.style.backgroundColor = 'red';
    savingsInput.value = null;
  }
}

var withdrawChecking = function() {
  if ((Number(checkingBalance.textContent) - Number(checkingInput.value)) >= 0) {
    checkingBalance.textContent = Number(checkingBalance.textContent) - Number(checkingInput.value);
    checkingInput.value = null;
  }
  if (Number(checkingBalance.textContent) === 0){
    console.log('oops');
    checkingBox.style.backgroundColor = 'red';
    checkingInput.value =  null;
  } else if (Number(checkingBalance.textContent) !== 0) {
    checkingBox.style.backgroundColor = '#ccc';
    checkingInput.value =  null;
  }
}


savingsDepositBtn.addEventListener('click', depositSavings);
checkingDepositBtn.addEventListener('click', depositChecking );

savingsWithdrawBtn.addEventListener('click', withdrawSavings);

checkingWithdrawBtn.addEventListener('click', withdrawChecking)



