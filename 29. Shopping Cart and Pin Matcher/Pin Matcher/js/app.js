// 3rd
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('this one not 4 digit' , pin)
        return getPin();
    }
}

// 2nd
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// 1st
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
   
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        // console.log(number);
        if(number === "C"){
         typedNumberField.value = '';
        }
        else if(number === "<"){
        //   console.log(previousTypedNumber);
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typedNumberField.value = remainingDigits;
        }
    }
    else{
        // const typedNumberField = document.getElementById('typed-number');
        // const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
        
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
  const displayPinField = document.getElementById('display-pin');
  const currentPin  = displayPinField.value;

  const typedNumberField = document.getElementById('typed-number');
  const typeNumber = typedNumberField.value;


  const pinSuccess = document.getElementById('pin-success');
  const pinFailure = document.getElementById('pin-failure');
  if(typeNumber === currentPin){
    // console.log('correct pin')
    // const pinSuccess = document.getElementById('pin-success');
    pinSuccess.style.display = 'block';
    pinFailure.style.display = 'none';
  }
  else{
    // console.log('incorrect pin')
    // const pinFailure = document.getElementById('pin-failure');
    pinFailure.style.display = 'block';
    pinSuccess.style.display = 'none';
  }

})