
const buttons = document.querySelectorAll('.buttons');
const displayb = document.querySelector('.output-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const backSpace = document.querySelector('.backspace');

solution.addEventListener('click', calculate);
clear.addEventListener("click", clearScreen);
backSpace.addEventListener("click", deleteNumber);

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
            if (b === 0 ) return null;
            return divide(num1, num2);
    }
};

let storedNumber = "";
let firstEnteredNumber = "";
let chosenOperator = "";

for (const btn of buttons) {
    btn.addEventListener("click", function (){
        displayb.innerText += btn.value;
        storedNumber += btn.value;

    })
}

operators.forEach((operator => {
    operator.addEventListener("click", function (){
        firstEnteredNumber = storedNumber;
        chosenOperator = operator.textContent;
        displayb.textContent = storedNumber + chosenOperator;
        storedNumber = "";
    })
}));

function calculate () {
    const result = operate(parseFloat(firstEnteredNumber), parseFloat(storedNumber), chosenOperator);
    displayb.textContent = result;
};

function clearScreen () {
    displayb.textContent = "";
    storedNumber = "";
};

function deleteNumber () {
    displayb.textContent = displayb.textContent.toString().slice(0, -1);
};
