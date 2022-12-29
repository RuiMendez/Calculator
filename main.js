"use strict";

//operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
//
//main operator function

function operate(operator, firstNumber, secondNumber) {
    let result;
    switch (operator) {
        case "+":
            result = console.log(add(firstNumber, secondNumber));
            break;
        case "-":
            result = console.log(subtract(firstNumber, secondNumber));
            break;
        case "*":
            result = console.log(multiply(firstNumber, secondNumber));
            break;
        case "/":
            result = console.log(divide(firstNumber, secondNumber));
            break;
    }
}

operate("/", 9, 3);