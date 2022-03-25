const switchButton = document.getElementById("switch");
const resetButton = document.getElementById("reset");
const btns = document.querySelectorAll(".button");
const greenBtns = document.querySelectorAll(".button__dark-green");
const calculator = document.getElementById("calculator");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");
const screen = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".number");
const zero = document.getElementById("zer");

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

// New arrray for future numbers
let numArray = [];
const addNum = () => {
    numArray.push();
};

// Displaying pressed buttons on the screen

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", () => {
        screen.innerHTML = screen.innerHTML + numberBtns[i].value;

        // Putting numbers in an array
        numArray.push(numberBtns[i].value);

        // Handling too long numbers
        if (numArray.length > 10) {
            alert("This number is too long.");
            screen.removeChild(screen.childNodes[0]);
            numArray = [];
        }
        // Converting array into string
        const numberString = numArray.join("");
        console.log(numberString);
    });
}

// Reset (C) button
resetButton.addEventListener("click", () => {
    screen.removeChild(screen.childNodes[0]);
    numArray = [];
});
