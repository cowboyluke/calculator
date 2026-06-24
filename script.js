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
let numberCounter = 0;
let nextNumber = false;


function operate(n1, n2, op) {
    switch (op) {
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "*":
            return multiply(n1, n2);
            break;
        case "/":
            return divide(n1, n2);
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
        if (nextNumber) {
            nextNumber = false;
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
    if (numberCounter < 1) {
        num1 = Number(display.textContent);    
        operand = "*";
        nextNumber = true;
        numberCounter++;
    } else {
        num2 = Number(display.textContent);
        operand = "*";
        display.textContent = String(operate(num1, num2, operand))
        num1 = Number(display.textContent);
        num2 = undefined;    
        nextNumber = true;
        numberCounter++;
    }
});
divider.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = Number(display.textContent);    
        operand = "/";
        nextNumber = true;
        numberCounter++;
    } else {
        num2 = Number(display.textContent);
        operand = "/";
        display.textContent = String(operate(num1, num2, operand))
        num1 = Number(display.textContent);
        num2 = undefined;    
        nextNumber = true;
        numberCounter++;
    }
});
plus.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = Number(display.textContent);    
        operand = "+";
        nextNumber = true;
        numberCounter++;
    } else {
        num2 = Number(display.textContent);
        operand = "+";
        display.textContent = String(operate(num1, num2, operand))
        num1 = Number(display.textContent);
        num2 = undefined;    
        nextNumber = true;
        numberCounter++;
    }
});
minus.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = Number(display.textContent);    
        operand = "-";
        nextNumber = true;
        numberCounter++;
    } else {
        num2 = Number(display.textContent);
        operand = "-";
        display.textContent = String(operate(num1, num2, operand))
        num1 = Number(display.textContent);
        num2 = undefined;    
        nextNumber = true;
        numberCounter++;
    }
});

equals.addEventListener("click", () => { //want to add the ability to keep pressing this and repeating the operation
        num2 = Number(display.textContent);
        display.textContent = String(operate(num1, num2, operand))
        num1 = undefined;
        num2 = undefined;
        operand = undefined;    
        numberCounter = 0;
});

//next steps are to add basic functionality to all the dark grey buttons
//once that is done, I will move on to only one decimal, max characters on screen, keyboard support and bugfixing