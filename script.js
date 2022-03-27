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
};

// Number buttons - click event listener
numberBtns.forEach((button) =>
    button.addEventListener("click", () => {
        numBtnsFn(button.value);
    }),
);

// Reset button
resetButton.addEventListener("click", () => {
    screen1.innerHTML = "";
    screen2.innerHTML = "";
});

// Function when operator buttons are clicked
const operatorBtnFn = (clicked) => {
    // let currentInput = screen2.innerHTML;
    if (clicked === "-" && !screen2.innerHTML) {
        screen2.innerHTML = "-";
    } else if (
        (clicked === "+" || clicked === "/" || clicked === "*") &&
        !screen2.innerHTML
    ) {
        screen2.innerHTML = "";
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

const equalsBtnFn = () => {};

equals.addEventListener("click", equalsBtnFn);
