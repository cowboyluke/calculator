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

let equalsCounter = 0;
let num1e = undefined;
let num2e = undefined;
let operande = undefined


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

function displayResults(number) {
    if (String(number).length < 11) {
        display.textContent = String(number);
    } else if (Math.abs(number) > (1 * 10 ** 9)) { //big number scientific exponent
        let base10decimal = number;
        let exponent = 0;
        let decimalPlaces = String(number).length;
        for (let i = 0; i < (decimalPlaces - 1); i++) {
            base10decimal = base10decimal / 10;
            exponent++;
        };
        base10decimal = (Math.round(base10decimal*1000000))/1000000; //rounds to 6 digits, plus the e+99, makes it total 10 digits
        display.textContent = String(base10decimal) + "e+" + String(exponent);
    } else if (Math.abs(number) < (1 * 10 ** -9)) { //small number scientific exponent
        let base10decimal = number;
        let exponent = 0;
        let decimalPlaces = String(number).length;
        if (decimalPlaces > 100) {
            decimalPlaces = 100; //rounds off irrational numbers
        }
        for (let i = 0; i < (decimalPlaces - 1); i++) {
            base10decimal = base10decimal * 10;
            exponent++;
        };
        base10decimal = (Math.round(base10decimal*1000000))/1000000; //rounds to 6 digits, plus the e+99, makes it total 10 digits
        display.textContent = String(base10decimal) + "e-" + String(exponent);
    } else {
            if (Math.abs(number) > 1) { //if it has something in the one's digit
                let intStr = String(number).slice(0, String(number).indexOf("."));
                let decStr = String(number).slice(String(number).indexOf("."));
                decStr = "0" + decStr;
                let decRounding = (10 - intStr.length) - 1;
                let dec = (Math.round(Number(decStr)*10**decRounding))/10**decRounding;
                display.textContent = String(Number(intStr) + dec);
            } else {    //if its one's digit is zero
                display.textContent = String((Math.round(number*(10**9)))/(10**9));
            } 
        }
}

function getNumber(str) {
    if (str.includes("e+")) {
        let decimal = str.slice(0, str.indexOf("e"));
        let exponent = str.slice(str.indexOf("+") +1); //done logic to create base 10, working on logic now to grab base 10. once its done will convert to negative exponents too
        decimal = Number(decimal);
        exponent = Number(exponent);
        return  decimal*(10**exponent);
    } else if (str.includes("e-")) {
        let decimal = str.slice(0, str.indexOf("e"));
        let exponent = str.slice(str.indexOf("-") +1); //done logic to create base 10, working on logic now to grab base 10. once its done will convert to negative exponents too
        decimal = Number(decimal);
        exponent = Number(exponent) * (-1);
        return  decimal*(10**exponent);
    } else {
        return Number(str);
    }
}

function typeToScreen(str) {
    if (display.textContent.length < 10) {
        display.textContent += str;
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
    typeToScreen("1");
});
two.addEventListener("click", () => {
    typeToScreen("2");
});
three.addEventListener("click", () => {
    typeToScreen("3");
});
four.addEventListener("click", () => {
    typeToScreen("4");
});
five.addEventListener("click", () => {
    typeToScreen("5");
});
six.addEventListener("click", () => {
    typeToScreen("6");
});
seven.addEventListener("click", () => {
    typeToScreen("7");
});
eight.addEventListener("click", () => {
    typeToScreen("8");
});
nine.addEventListener("click", () => {
    typeToScreen("9");
});
zero.addEventListener("click", () => {
    typeToScreen("0");
});


multiplier.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = getNumber(display.textContent);    
    } else {
        num2 = getNumber(display.textContent);
        displayResults(operate(num1, num2, operand));
        num1 = getNumber(display.textContent);
        num2 = undefined;

    }        
        nextNumber = true;
        numberCounter++;
        operand = "*";
        operande = operand; //for repetative equals pressing
        equalsCounter = 0;
});
divider.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = getNumber(display.textContent);    
    } else {
        num2 = getNumber(display.textContent);
        displayResults(operate(num1, num2, operand));
        num1 = getNumber(display.textContent);
        num2 = undefined;    
    }
        nextNumber = true;
        numberCounter++;
        operand = "/";
        operande = operand;
        equalsCounter = 0;
});
plus.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = getNumber(display.textContent);    
    } else {
        num2 = getNumber(display.textContent);
        displayResults(operate(num1, num2, operand));
        num1 = getNumber(display.textContent);
        num2 = undefined;    
    }
        nextNumber = true;
        numberCounter++;
        operand = "+";
        operande = operand;
        equalsCounter = 0;
});
minus.addEventListener("click", () => {
    if (numberCounter < 1) {
        num1 = getNumber(display.textContent);    
    } else {
        num2 = getNumber(display.textContent);
        displayResults(operate(num1, num2, operand));
        num1 = getNumber(display.textContent);
        num2 = undefined;    
    }
        nextNumber = true;
        numberCounter++;
        operand = "-";
        operande = operand;
        equalsCounter = 0;
});

equals.addEventListener("click", () => { //want to add the ability to keep pressing this and repeating the operation
        if (equalsCounter < 1) {
            num2 = getNumber(display.textContent);
            num2e = num2;
            displayResults(operate(num1, num2, operand));
            equalsCounter++;
        } else { //the repetative equals pressing case
            num1e = getNumber(display.textContent);
            displayResults(operate(num1e, num2e, operande));
        }
            num1 = undefined;
            num2 = undefined;
            operand = undefined;    
            numberCounter = 0;
});

//next steps are to add basic functionality to all the dark grey buttons
//once that is done, I will move on to only one decimal, max characters on screen, keyboard support and bugfixing