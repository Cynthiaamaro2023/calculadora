const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function appendOperator(operator) {
    if (display.value !== '' && '+-*/'.indexOf(display.value.slice(-1)) === -1) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = calculate(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculate(expression) {
    const operators = expression.match(/[+\-*/]+/g);
    const numbers = expression.split(/[+\-*/]+/).map(Number);
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const number = numbers[i + 1];

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        } else if (operator === '*') {
            result *= number;
        } else if (operator === '/') {
            if (number !== 0) {
                result /= number;
            } else {
                throw new Error("División por cero");
            }
        }
    }

    return result;
}
