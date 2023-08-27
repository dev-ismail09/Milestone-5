const demo = document.querySelectorAll('section');
// console.log(demo);
for(let section of demo){
    console.log(section.innerText);
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '25px';
    section.style.paddingLeft = '15px';
    section.style.backgroundColor = 'lightgray';
}

const allClass = document.getElementsByClassName('headerTag');
for(let headerTag of allClass){
    console.log(headerTag.innerText);
    headerTag.style.backgroundColor = 'yellow';
}

// const lastSection = document.getElementById('thirdSection');
// lastSection.style.backgroundColor = 'yellow';

const lastSection = document.getElementById('thirdSection');
lastSection.classList.add('yellow-bg');
lastSection.classList.remove('large-text');