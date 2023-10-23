// case 
function updateCaseNumber(isIncrease){
    const caseField = document.getElementById('case-field');
    const caseFieldString = caseField.value;
    const caseFieldNumber = parseInt(caseFieldString);
    
    let newCaseNumber;
    if(isIncrease === true){
       newCaseNumber = caseFieldNumber + 1;
    }
    else{
        newCaseNumber = caseFieldNumber - 1;
        if(caseFieldNumber == 0){
           return 0
        }
    }
    caseField.value = newCaseNumber;
    return newCaseNumber;
    
       
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 2;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
})

// phone

function updatePhoneNumber(isIncrease){
    const phoneField = document.getElementById('phone-field');
    const phoneFieldString = phoneField.value;
    const phoneFieldNumber = parseInt(phoneFieldString);
    
    let newPhoneNumber 
    if(isIncrease === true){
       newPhoneNumber =  phoneFieldNumber + 1;
    }
    else{
       newPhoneNumber = phoneFieldNumber - 1;
       if(phoneFieldNumber == 0){
        return 0
     }
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalElement = document.getElementById('phone-total');
    const phoneTotalPrice = newPhoneNumber * 10;
    phoneTotalElement.innerText = phoneTotalPrice;
    return phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})


// subtotal


// function getTextElementValueById(elementId){
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalS = phoneTotalElement.innerText;
//     const currentPhoneTotalN = parseInt(currentPhoneTotalS);
//     return currentPhoneTotalN;
// }

// function setTextElementValueById(elementId, value){
//     const subTotalElement = document.getElementById(elementId);
//     subTotalElement.innerText = value;
//  }


// function calculateSubTotal(){
//     const currentPhoneTotalN = getTextElementValueById('phone-total');
//     const currentCaseTotalN = getTextElementValueById('case-total');
//     const currentSubTotal = currentPhoneTotalN + currentCaseTotalN;

//     setTextElementValueById('sub-total', currentSubTotal);

//     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
//     const taxAmount = parseFloat(taxAmountString);
//     setTextElementValueById('tax-amount', taxAmount);

//     const finalAmount = currentSubTotal + taxAmount;
//     setTextElementValueById('final-total', finalAmount);
// }


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
   
    setTextElementValueById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}



