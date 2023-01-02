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
function initialDisplay() {
    return (display.innerHTML = "0");
}
let opperandOneArray = [];

//populate display with numbers
for (let i = 0; i < numberButtons.length; i++) {
    let button = numberButtons[i];
    button.addEventListener("click", () => {
        if (display.innerHTML === "0") {
            display.innerHTML = "";
        }
        display.innerHTML += button.innerHTML;
        addOpperandOne();
    });
}

function addOpperandOne() {
    const inputNumbers = Number(display.innerHTML);
    opperandOneArray.push(inputNumbers);
    opperandOneArray.splice(0, opperandOneArray.length - 1);
}
//clear display
clearButton.addEventListener("click", () => {
    initialDisplay();
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
initialDisplay();