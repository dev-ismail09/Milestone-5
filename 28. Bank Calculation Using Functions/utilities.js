// DRY-- Do Not Repeat Yourself

function getInputFieldValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

function getTextFieldValueId(elementId){
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString);
    return textFieldNumber;
}

function setTextElementValueId(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}