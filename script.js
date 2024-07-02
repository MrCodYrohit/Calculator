// script.js
let display = document.getElementById('display');
let currentOperand = '';

function appendNumber(number) {
    if (currentOperand === '0' && number === '0') return;
    if (number === 'C') {
        clearDisplay();
        return;
    }
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    currentOperand += op;
    updateDisplay();
}

function compute() {
    try {
        currentOperand = eval(currentOperand).toString();
    } catch {
        currentOperand = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}
