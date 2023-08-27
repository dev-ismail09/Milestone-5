// option-1: directly set on the HTML element
/*
<button onclick="console.log(5)">Click Me!</button>
<button onclick="console.log(document.body.style.background = 'yellow')">This can change color</button>
*/

// option-2 [we will use this]
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option- 3
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeblue; // makeblue() dile sorasori color peye jabe karon function call hoye jai

    function makeblue(){
        document.body.style.backgroundColor = 'blue';
    }

// option-3(another) 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'purple';
}

// option-4

const pinkButton = document.getElementById('make-pink');
  pinkButton.addEventListener('click', makePink);

  function makePink(){
    document.body.style.backgroundColor = 'pink';
  }

// option-4(another)

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
  document.body.style.backgroundColor = 'green';
});

// option :4 Final [important use many time]

// document.getElementById('make-golden').addEventListener('click', function(){})
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})