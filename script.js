let shay = true;

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

let num1 = undefined;
let num2 = undefined;
let operand = undefined;
let startSecondNumber = false;
let equationLength = 0;

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
const numButton = document.querySelectorAll(".numButtons");
const display = document.querySelector(".numbers"); //edit the text content here to change the numbers
const negative = document.querySelector(".negative");
const allClear = document.querySelector(".allClear");
const backspace = document.querySelector(".backspace");
const multiplier = document.querySelector(".multiply");
const divider = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equals = document.querySelector(".equals");
const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".period");

anyButton.forEach(btn => {
    btn.addEventListener("click", () => {
        if (shay) {
            shay = false;
            display.textContent = "";
        }
    })
});

numButton.forEach(btn => {
    btn.addEventListener("click", () => {
        if (startSecondNumber) {
            display.textContent = "";
        }
    })
}); 

one.addEventListener("click", () => {
    display.textContent += "1";
});
two.addEventListener("click", () => {
    display.textContent += "2";
});
three.addEventListener("click", () => {
    display.textContent += "3";
});
four.addEventListener("click", () => {
    display.textContent += "4";
});
five.addEventListener("click", () => {
    display.textContent += "5";
});
six.addEventListener("click", () => {
    display.textContent += "6";
});
seven.addEventListener("click", () => {
    display.textContent += "7";
});
eight.addEventListener("click", () => {
    display.textContent += "8";
});
nine.addEventListener("click", () => {
    display.textContent += "9";
});
zero.addEventListener("click", () => {
    display.textContent += "0";
});


multiplier.addEventListener("click", () => {
    num1 = Number(display.textContent);
    operand = "*";
    startSecondNumber = true;
    equationLength++;
});
divider.addEventListener("click", () => {
    num1 = Number(display.textContent);
    operand = "/";
    startSecondNumber = true;
    equationLength++;
});
plus.addEventListener("click", () => {
    num1 = Number(display.textContent);
    operand = "+";
    startSecondNumber = true;
    equationLength++;
});
minus.addEventListener("click", () => {
    num1 = Number(display.textContent);
    operand = "-";
    startSecondNumber = true;
    equationLength++;
});

// i am in the middle of using equation length to allow 1+1+1+...+1=, as well as implementing start second number to allow the second number to be imputted while pressing a number key (but you can change the operand). i also want to have the active operand highlighted.

equals.addEventListener("click", () => {

});