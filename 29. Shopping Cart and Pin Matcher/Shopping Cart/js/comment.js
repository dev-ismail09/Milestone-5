function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalS = phoneTotalElement.innerText;
    const currentPhoneTotalN = parseInt(currentPhoneTotalS);
    return currentPhoneTotalN;
 }
 function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
 }

 function calculateSubTotal(){
    const currentPhoneTotalN = getTextElementValueById('phone-total');
    const currentCaseTotalN = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotalN + currentCaseTotalN;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
 }