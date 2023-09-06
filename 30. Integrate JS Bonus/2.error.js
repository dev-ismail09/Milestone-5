// not in JS that frequently: range error
const numbers = [3, 4, 56, 100];
// you should not do it (most of the case)
numbers.length = 2;
console.log(numbers);
console.log(numbers[25]);

// reference error
// console.log(money);
const money = 80;

// SyntaxError
for(let i = 0 i < 5 i++){
    console.log(i);
}

// TypeError
const num = 123;
num.toUppereCase();

