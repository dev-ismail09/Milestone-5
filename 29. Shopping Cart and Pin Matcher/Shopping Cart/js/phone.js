function updatePhoneNumber(isIncrease){
    const phoneField = document.getElementById('phone-field');
    const phoneFieldString = phoneField.value;
    const phoneFieldNumber = parseInt(phoneFieldString);

    let phoneNumber;
    if(isIncrease){
        phoneNumber = phoneFieldNumber + 1; 
    }
    else{
        phoneNumber = phoneFieldNumber - 1;
    }
    phoneField.value = phoneNumber;

    return phoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
   const phoneTotalPrice = newPhoneNumber * 1219;
   const phoneTotalElement = document.getElementById('phone-total');
   phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);

   // calculate total
   calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);
   
   calculateSubTotal();
})
