function getInputFieldValueById(InputId){
    const depositF = document.getElementById(InputId);
    const depositFS = depositF.value;
    const depositFN = parseFloat(depositFS);
    depositF.value = '';
    return depositFN;
}

function getTextFieldValueById(elementId){
    const depositTotal = document.getElementById(elementId);
    const depositTotalS = depositTotal.innerText;
    const depositTotalN = parseFloat(depositTotalS);
    return depositTotalN;
}

function setTotal(elementId, newValue){
   const whichOneSet = document.getElementById(elementId);
   whichOneSet.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
 const deposit =  getInputFieldValueById('deposit-field');
 const depositAmount = getTextFieldValueById('deposit-total');

 const newDepositAmount = deposit + depositAmount;
 
 setTotal('deposit-total', newDepositAmount);

 const TotalBalance = getTextFieldValueById('balance-total');
 const newTotalBalance = TotalBalance + newDepositAmount;
 setTotal('balance-total', newTotalBalance);


})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = getInputFieldValueById('withdraw-field');
    const withdrawAmount = getTextFieldValueById('withdraw-total');

    const NewWithdrawAmount = withdraw + withdrawAmount;
    setTotal('withdraw-total', NewWithdrawAmount);

    const TotalBalance = getTextFieldValueById('balance-total');
    const newTotalBalance = TotalBalance - NewWithdrawAmount;
    setTotal('balance-total', newTotalBalance);
})
