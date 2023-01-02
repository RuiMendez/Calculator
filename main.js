"use strict";

//Selecting elements

let numberButtons = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll("[data-operator]");
const dotButton = document.getElementById("dot");
const deleteButton = document.getElementById("button-delete-bigger");
const clearButton = document.getElementById("button-clear-bigger");
const equalButton = document.getElementById("button-equal");
let display = document.querySelector(".calculations-display");
//
display.innerHTML = "0";

//populate display with numbers
for (let i = 0; i < numberButtons.length; i++) {
    let button = numberButtons[i];
    button.addEventListener("click", () => {
        if (display.innerHTML === "0") {
            display.innerHTML = "";
        }
        display.innerHTML += button.innerHTML;
    });
}

//clear display
clearButton.addEventListener("click", () => {
    console.log(display.textContent);
});
//

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