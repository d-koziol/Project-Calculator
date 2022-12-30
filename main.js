
const buttons = document.querySelectorAll('.buttons');
const displayb = document.querySelector('.output-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const backSpace = document.querySelector('.backspace');


function add(a,b){
    return a + b;
}
console.log(add(2,3))


function substract(a,b){
    return a - b;
}
console.log(substract(2,3))


function multiply(a,b){
    return a * b;
}
console.log(multiply(2,3))


function divide(a,b){
    return a / b;
}
console.log(divide(6,3))


function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

console.log(operate(1,2,"+"));