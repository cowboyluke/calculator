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
    if (String(number).length < 10) { //js math bullshit misses this
        display.textContent = String(number);
    } else if (Math.abs(number) > (1 * 10 ** 9)) { //big number scientific exponent
        let base10decimal = number;
        let exponent = Math.floor(Math.log10(Math.abs(number)));
            if (exponent > 99) {
                if (number > 0) {
                display.textContent = "9.99999e+99";
                } else {
                display.textContent = "-9.99999e+99";
                }
            } else {
        base10decimal = base10decimal/(10**exponent); 
        base10decimal = base10decimal.toFixed(5);//rounds to 6 digits total, plus the e+99, makes it total 10 digits
        display.textContent = String(Number(base10decimal)) + "e+" + String(exponent);
            }
    } else if (Math.abs(number) < (1 * 10 ** -9)) { //small number scientific exponent
        let base10decimal = number;
        let exponent = Math.floor(Math.log10(Math.abs(number)));
            if (exponent < -99) {
                if (number > 0) {
                display.textContent = "9.99999e-99";
                } else {
                display.textContent = "-9.99999e-99";
                }
            } else {
        base10decimal = base10decimal/(10**exponent); 
        base10decimal = base10decimal.toFixed(5);//rounds to 6 digits total, plus the e+99, makes it total 10 digits
        display.textContent = String(Number(base10decimal)) + "e-" + String(Math.abs(exponent));
            }
    } else {
            if (!(String(number).includes("."))) {
                display.textContent = String(number); //is this the FIX??????????????????????????????????????????????????????????????/
            } else if (Math.abs(number) > 1) { //if it has something in the one's digit
                let intStr = String(number).slice(0, String(number).indexOf("."));
                let decStr = String(number).slice(String(number).indexOf("."));
                decStr = "0" + decStr;
                let decRounding = (10 - intStr.length) - 2; //its -2 cuz of the .
                let dec = Number(Number(decStr).toFixed(decRounding));
                display.textContent = String(Number(intStr) + dec);
            } else {    //if its one's digit is zero
                let x = String(number.toFixed(6));
                x = Number(x); //gets rid of random zeros?
                display.textContent = String(x);
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
    } else if (display.textContent === "") {
        return 0;
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
                if (operand != undefined && display.textContent != "") { //to prevent bugs if you press the equals with not enough info
                    num2 = getNumber(display.textContent);
                    if ((num2 === 0 && operand === "/")) {
                        display.textContent = ":(";
                    } else {
                        num2e = num2;
                        displayResults(operate(num1, num2, operand));
                        equalsCounter++;
                        num1 = undefined;
                        num2 = undefined;
                        operand = undefined;    
                        numberCounter = 0;
                    }
                }
            } else { //the repetative equals pressing case
                num1e = getNumber(display.textContent);
                displayResults(operate(num1e, num2e, operande));
                num1 = undefined;
                num2 = undefined;
                operand = undefined;    
                numberCounter = 0;
            }
    
});

negative.addEventListener("click", () => {
        let x = getNumber(display.textContent);
        x *= -1;
        displayResults(x);
    });

allClear.addEventListener("click", () => {
    //sets all variables we used to their initial states
    num1 = undefined;
    num2 = undefined;
    operand = undefined;
    numberCounter = 0;
    nextNumber = false;
    equalsCounter = 0;
    num1e = undefined;
    num2e = undefined;
    operande = undefined;

    display.textContent = "";
    });
backspace.addEventListener("click", () => {
        if (!(nextNumber)){
            let str = String(getNumber(display.textContent));
            str = str.slice(0, str.length - 1);
            displayResults(str);
        }
    });
decimal.addEventListener("click", () => {
        let num = getNumber(display.textContent);
       if (!(String(num).includes("."))) {
        let str = String(num);
        str = str + ".";
        displayResults(str);
       };
    });

// only things left is keyboard support, bugfixing and making it prettier
window.addEventListener("keydown", (eventobj) => {
    if (eventobj.key === "1") {
        one.click();
    } else if (eventobj.key === "2") {
        two.click();
    } else if (eventobj.key === "3") {
        three.click();
    } else if (eventobj.key === "4") {
        four.click();
    } else if (eventobj.key === "5") {
        five.click();
    } else if (eventobj.key === "6") {
        six.click();
    } else if (eventobj.key === "7") {
        seven.click();
    } else if (eventobj.key === "8") {
        eight.click();
    } else if (eventobj.key === "9") {
        nine.click();
    } else if (eventobj.key === "0") {
        zero.click();
    } else if (eventobj.key === "*" || eventobj.key === "x" || eventobj.key === "X") {
        multiplier.click();
    } else if (eventobj.key === "/") {
        divider.click();
    } else if (eventobj.key === "+") {
        plus.click();
    } else if (eventobj.key === "=" || eventobj.key === "Enter" || eventobj.key === "Return") {
        eventobj.preventDefault(); //prevents it from firing selected button apparantly
        equals.click();
    } else if (eventobj.key === "Backspace" || eventobj.key === "Delete") {
        if (eventobj.shiftKey) {
            allClear.click();
        } else {
            backspace.click();
        }
    } else if (eventobj.key === "-" || eventobj.key === "_") {
        if (eventobj.shiftKey) {
            negative.click();
        } else {
            minus.click();
        }
    } else if (eventobj.key === ".") {
        decimal.click();
    }
});

const infoButton = document.querySelector(".info2");
infoButton.addEventListener("click", () => {
    document.querySelector(".myModalWindow").showModal();
    //alert(`Use the number keys to input numbers\nUse "*" or "X" for multiply\nUse "/" to divide\nUse "+" to add\nUse "-" to subtract\nUse "=" or "Enter" to equals\nHold "Shift" and press "-" to make it negative\nHold "Shift" and press "Enter" to Clear All\nUse "." to add a decimal\nPress "Backspace" to remove a character`);
});

const closeButton = document.querySelector(".myModal");
closeButton.addEventListener("click", () => {
    document.querySelector(".myModalWindow").close()
});