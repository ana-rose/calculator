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

// New array for future numbers
let numArray = [];
let numArray2 = [];
let numberString = "";
let input = 0;
let prevValue = 0;

// Reset (C) button
resetButton.addEventListener("click", () => {
    screen.removeChild(screen1.childNodes[0]);
    numArray = [];
});

// Displaying pressed buttons on the screen

numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        screen.innerHTML += button.value;
        numArray.push(button.value);
        numberString = numArray.join("");
        input = Number(numberString);
        console.log(input);

        if (numArray.length > 10) {
            alert("This number is too long.");
            screen.removeChild(screen.childNodes[0]);
            numArray = [];
        }
    });
});
