"use strict";

//Selecting elements

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const dotButton = document.getElementById("dot");
const deleteButton = document.getElementById("button-delete-bigger");
const clearButton = document.getElementById("button-clear-bigger");
const equalButton = document.getElementById("button-equal");
let display = document.querySelector(".calculations-display");
//
let displayValue = 0;
display.innerHTML += displayValue;
//
//clear
clearButton.addEventListener("click", () => {
    console.log(display.textContent);

    display.textContent = 0;
});
//
numberButtons.forEach((btn) => {
    addEventListener("click", () => {
        console.log("teste");
        upddateDisplay();
    });
});

function upddateDisplay() {
    displayValue = numberButtons.innerHTML;
}
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
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}