// step-1: add click event handle with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step-2: get the email &  password input field   
// always remember to use .value to get text from an input field
const emailField = document.getElementById('email-field');
const email = emailField.value;
console.log(email);

// step-3: get password same way
const passwordField = document.getElementById('password-field');
const password = passwordField.value;
console.log(password);

// DANGER: Do not Verify email password on the client site
// step-4: verify email and password

if(email === "alimdjibon75@gmail.com" && password === '8563'){
    // console.log('Valid User');
    window.location.href = 'bank.html';
}
else{
    // console.log('Invalid User');
    alert('kive vai tor password vule gesos?');
}
})
