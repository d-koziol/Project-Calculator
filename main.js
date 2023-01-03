
const buttons = document.querySelectorAll('.buttons');
const displayb = document.querySelector('.output-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const backSpace = document.querySelector('.backspace');

function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

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

let storedNumber = "";
let firstEnteredNumber = "";

for (const btn of buttons) {
    btn.addEventListener("click", function (){
        displayb.innerText += btn.value;
        storedNumber += btn.value;

    })
}
