const switchButton = document.getElementById("switch");
const resetButton = document.getElementById("reset");
const btns = document.querySelectorAll(".button");
const greenBtns = document.querySelectorAll(".button__dark-green");
const calculator = document.getElementById("calculator");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");
const dot = document.getElementById("dott");
const deleteOne = document.getElementById("deleteOne");

// Day & night colours -toggle
switchButton.addEventListener("click", () => {
    btns.forEach((button) => button.classList.toggle("button--night"));
    calculator.classList.toggle("calculator--night");
    greenBtns.forEach((button) =>
        button.classList.toggle("button__dark-green--night"),
    );
});

// Day & night icons - toggle
icon2.style.display = "none";

const dayNight = () => {
    if (icon.style.display === "none") {
        icon.style.display = "block";
        icon2.style.display = "none";
    } else {
        icon.style.display = "none";
        icon2.style.display = "block";
    }
};

// Function when number buttons are clicked:

const numBtnsFn = (clicked) => {
    if (screen2.innerHTML.length > 10) {
        alert("This number is too long.");
        screen2.innerHTML = "";
    } else {
        screen2.innerHTML += clicked;
    }
    // Targeting the situation when the very first number is 0 and is not followed by "." - we want to remove 0:
    subString = screen2.innerHTML.slice(0, 2);
    if (subString[0] === "0" && subString[subString.length - 1] !== ".") {
        screen2.innerHTML = clicked;
    }
};

// Number buttons - click event listener
numberBtns.forEach((button) =>
    button.addEventListener("click", () => {
        numBtnsFn(button.value);
    }),
);

// Decimal point- cannot be more than 1 per number

dot.addEventListener("click", () => {
    if (screen2.innerHTML.includes(".")) {
        alert("This number already has a decimal point");
    } else if (!screen2.innerHTML) {
        screen2.innerHTML = "";
    } else {
        screen2.innerHTML += ".";
    }
});

// Reset button
resetButton.addEventListener("click", () => {
    screen1.innerHTML = "";
    screen2.innerHTML = "";
});

// Function when operator buttons are clicked
const operatorBtnFn = (clicked) => {
    if (clicked === "-" && !screen2.innerHTML) {
        screen2.innerHTML = "-";
    } else if (
        (clicked === "+" || clicked === "/" || clicked === "*") &&
        !screen2.innerHTML
    ) {
        screen2.innerHTML = "";
    } else if (screen1.innerHTML && screen2.innerHTML) {
        screen1.innerHTML;
        screen2.innerHTML;
    } else {
        screen1.innerHTML = screen2.innerHTML + clicked;
        screen2.innerHTML = "";
    }
    if (
        screen1.innerHTML.includes("-+") ||
        screen1.innerHTML.includes("--") ||
        screen1.innerHTML.includes("-*") ||
        screen1.innerHTML.includes("-/")
    ) {
        screen1.innerHTML = "";
    }
};

// Operator buttons event listener
operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        operatorBtnFn(button.value);
    });
});

// Equals button event listener + function

const calculate = (firstNumber, secondNumber, myOperator) => {
    let prevInput = screen1.innerHTML;
    let currInput = screen2.innerHTML;
    firstNumber = parseFloat(prevInput);
    secondNumber = parseFloat(currInput);
    myOperator = prevInput.charAt(prevInput.length - 1);
    let result;
    let resultDec;
    switch (myOperator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = screen2.innerHTML;
    }
    screen1.innerHTML = "";
    screen2.innerHTML = result;
    // Decimals
    if (result % 1) {
        resultDec = result.toFixed(5);
        screen2.innerHTML = "" + parseFloat(resultDec);
    }
    // If operation results in number > 10 digits
    if (!(result % 1) && result.toString().length > 10) {
        screen2.innerHTML = result.toExponential(5);
    }
};

equals.addEventListener("click", calculate);

const deleteOneNumber = () => {
    currInput = screen2.innerHTML;
    const withoutLastChar = currInput.slice(0, -1);
    screen2.innerHTML = withoutLastChar;
};

deleteOne.addEventListener("click", () => {
    deleteOneNumber();
});
