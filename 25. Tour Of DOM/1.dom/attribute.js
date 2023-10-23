// getAttribute, setAttribute

let element = document.getElementById('first-id');
console.log(element.getAttribute('class')); // show korebe
console.log(element.getAttribute('id')); // show korbe
console.log(element.classList);
console.log(element.classList.add('newThree'));
console.log(element.classList.add('newFour'));
console.log(element.classList.add('newFive'));
console.log(element.classList.remove('newFive'));
console.log(element.classList.remove('newFour'));
console.log(element.classList);
console.log(element.setAttribute('title', 'tooltip set by JS'));


//
const ValueSet = document.getElementsByClassName('headerTag')[0].innerHTML = "I change it";
console.log(ValueSet);
