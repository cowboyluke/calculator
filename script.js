const shay = true;

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let num1;
let num2;
let operand;

function operate(n1, n2, op) {
    switch (op) {
        case "+":
            add(n1, n2);
            break;
        case "-":
            subtract(n1, n2);
            break;
        case "*":
            multiply(n1, n2);
            break;
        case "/":
            divide(n1, n2);
            break;
        default:
            console.log("wtf");
            break;
    }
}

const anyButton = document.querySelectorAll("button"); //to get rid of welcome :) after any button press
const display = document.querySelector("#numbers"); //edit the text content here to change the numbers
const negative = document.querySelector("#negative");
const allClear = document.querySelector("#allClear");
const backspace = document.querySelector("#backspace");
const multiplier = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const equals = document.querySelector("#equals");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#period");

/*
while (shay) {
    display.textContent = "Welcome :&#41;";
}
anyButton.addEventListener("on click", () => {
    shay = false;
});
*/
