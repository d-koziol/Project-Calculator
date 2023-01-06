
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

clear.addEventListener("click", clearScreen);
backSpace.addEventListener("click", deleteNumber);
solution.addEventListener('click', calculate);


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
            resultDisplay();
            return;
        }
            storedNumber /= currentNumber;
    }
    storedNumber = roundNumber(storedNumber);
    storedNumber = storedNumber.toString();
    resultDisplay();
}

function clearScreen () {
    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
    storedNumber = "";
    currentNumber = "";
    chosenOperator = "";
};

function deleteNumber () {
    if (currentNumber !== "") {
      currentNumber = currentNumber.slice(0, -1);
      currentDisplay.textContent = currentNumber;
      if (currentNumber === "") {
        currentDisplay.textContent = "0";
      }
    }
    if (currentNumber === "" && storedNumber !== "" && chosenOperator === "") {
      storedNumber = storedNumber.slice(0, -1);
      currentDisplay.textContent = storedNumber;
    }
  }

function roundNumber (num) {
    return Math.round(num * 10000) / 10000;
}

function resultDisplay () {
    if (storedNumber.length <= 11) {
        currentDisplay.textContent = storedNumber;
    } else {
        currentDisplay.textContent = storedNumber.slice(0, 11) + "...";
    }
    previousDisplay.textContent = "";
    chosenOperator = "";
    currentNumber = "";
}