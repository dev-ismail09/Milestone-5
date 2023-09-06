document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmonut = getInputFieldValueId('withdraw-field');
    const previousWithdrawAmount = getTextFieldValueId('withdraw-total');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmonut;
    if(isNaN(newWithdrawTotal)){
        alert('Please enter a valid number');
        return;
      }
    setTextElementValueId('withdraw-total', newWithdrawTotal);

    const newBalance = getTextFieldValueId('balance-total');
    const FinalBalance = newBalance - newWithdrawTotal;
    setTextElementValueId('balance-total', FinalBalance);
   
})