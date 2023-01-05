
let storedNumber = "";
let currentNumber = "";
let chosenOperator = "";


const buttons = document.querySelectorAll(".buttons");
const previousDisplay = document.querySelector(".prev-num")
const currentDisplay = document.querySelector(".curr-num")
const clear = document.querySelector("#clear");
const solution = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const backSpace = document.querySelector(".backspace");

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
            if (num2 === 0 ) return null;
            return divide(num1, num2);
            default:
                return null;
    }
};


buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        keepNumber(e.target.textContent);
    });
});

function keepNumber(number) {
    if (currentNumber.length <= 11) {
        currentNumber += number;
        currentDisplay.textContent = currentNumber;
    }
}

operators.forEach(btn => {
    btn.addEventListener("click", (e) => {
        keepOperator(e.target.textContent);
    });
});

function keepOperator(oprtr) {
    operator = oprtr;
    storedNumber = currentNumber;
    previousDisplay.textContent = storedNumber + " " + operator;
    currentNumber = "";
    currentDisplay.textContent = "";
}

function calculate() {
    storedNumber = Number(storedNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        storedNumber += currentNumber;
    } else if
        (operator === "-"){
            storedNumber -= currentNumber;
    } else if
        (operator === "*") {
            storedNumber *= currentNumber;
    } else if (operator === "/") {
        if (currentNumber <= 0){
            storedNumber = "Error";
            previousDisplay.textContent = "";
            currentDisplay.textContent = storedNumber;
            operator = "";
            return;
        }
            storedNumber /= currentNumber;
    }
    storedNumber = storedNumber.toString();
    previousDisplay.textContent = "";
    currentDisplay.textContent = storedNumber;
}

function clearScreen () {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    storedNumber = "";
    currentNumber = "";
};

function deleteNumber () {
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
};

function resultDisplay () {
    
}