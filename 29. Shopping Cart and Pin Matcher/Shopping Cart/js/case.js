/*
1. add event listener to the case plus button
2. get the value inside the case number field( input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field
*/

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
   }
   caseField.value = newCaseNumber;

   return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
//    const caseField = document.getElementById('case-field');
//    const caseFieldString = caseField.value;
//    const caseFieldNumber = parseInt(caseFieldString);
   
//    const newCaseNumber = caseFieldNumber + 1;
//    caseField.value = newCaseNumber;
    const newCaseNumber =  updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    
    calculateSubTotal();

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
//    const caseField = document.getElementById('case-field');
//    const caseFieldString = caseField.value;
//    const caseFieldNumber = parseInt(caseFieldString);
   
//    const newCaseNumber = caseFieldNumber - 1;
//    if(newCaseNumber <= 0){
//     return;
//    }
//    caseField.value = newCaseNumber;
     const newCaseNumber = updateCaseNumber(false);
     updateCaseTotalPrice(newCaseNumber);

     calculateSubTotal();

    //  const caseTotalPrice = newCaseNumber * 59;
    //  const caseTotalElement = document.getElementById('case-total');
    //  caseTotalElement.innerText = caseTotalPrice;
})