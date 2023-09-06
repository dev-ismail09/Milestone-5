
document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueId('deposit-field');
    
    // 1. get previous deposit total by id
    const previousDepositAmount = getTextFieldValueId('deposit-total');
    
    // calculate new deposit value
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    if(isNaN(newDepositTotal)){
        alert('Please enter a valid number');
        return;
      }

    // set deposit total value
    setTextElementValueId('deposit-total', newDepositTotal);
    
    // get previous balance by using the function
    const newBalance = getTextFieldValueId('balance-total');
    const FinalBalance = newBalance + newDepositTotal;
    
    setTextElementValueId('balance-total', FinalBalance);
})