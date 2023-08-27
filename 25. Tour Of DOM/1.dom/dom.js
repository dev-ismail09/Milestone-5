//getElementById, getElementsByClassName, getElementBy--> QuerySelector, querySelectorAll(mark much using, and it's make Nodelist{aitai forEach() use korte parbo})

const headerChange = document.getElementById('first-id').innerHTML = 'I change it, using JS';
console.log(headerChange);
const LiSelect = document.querySelectorAll('.Ulmark li');
for(let newOne of LiSelect){
    console.log(newOne.innerText);
}
console.log(LiSelect);

/*
option-1
getElementsByTagName

option-2
getElementById

option-3
getElementsByClassName

option-4
querySelector

option-5
querySelectorAll

*/

