const placesContainer = document.getElementById('thirdSection');
console.log( placesContainer.childNodes);
console.log(placesContainer); 
console.log(placesContainer.firstChild); 
console.log( placesContainer.childNodes[1]);
console.log(placesContainer.childNodes[3].childNodes);
console.log(placesContainer.childNodes[3].childNodes[3]);
console.log(placesContainer.childNodes[3].childNodes[3].nextSibling);


// create element
console.log(document.createElement('p'));
console.log(document.createElement('section'));
const Li = document.createElement('li');
Li.innerText = 'Create new li';
