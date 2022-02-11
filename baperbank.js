
// diposit sector 
document.getElementById('diposit-button').addEventListener('click',function(){
    const dipositInput = document.getElementById('diposit-input');
    const dipositValue = dipositInput.value;
    const dipositBox = document.getElementById('diposit-box');
  
const newvalue = dipositBox.innerText;
const total = parseFloat(newvalue) + parseFloat(dipositValue);
dipositBox.innerText = total
    dipositInput.value = '';

    // its balance sector 
    const balanceBox = document.getElementById('balanced');
const oldvalue = balanceBox.innerText;
const balanceTotal = parseFloat(oldvalue) + parseFloat(dipositValue);
balanceBox.innerText = balanceTotal;
dipositInput.value = '';
});
// work for withdraw
document.getElementById('Withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('Withdraw-input');
    const inputValueText = withdrawInput.value;
    const newWithdrawValue = parseFloat(inputValueText);
    const withdrawBox = document.getElementById('withdraw-box');
    const withdrawAmount = withdrawBox.innerText;
    const withdrawPlace = parseFloat(withdrawAmount);
    const result = newWithdrawValue + withdrawPlace;
    withdrawBox.innerText = result;
    // now balanced time
   
    const balanced = document.getElementById('balanced');
   
    const balancedText = balanced.innerText;
    const balancedValue = balancedText - newWithdrawValue;
    balanced.innerText = balancedValue;
   const Withdraw = document.getElementById('Withdraw-button');
    if(balancedText == 0){
        alert('Warning: balenced finish')
    }
    else{
        alert('withdraw success')
    }
    // all clear 
    withdrawInput.value = '';
})