const switchButton = document.getElementById("switch");
const resetButton = document.getElementById("reset");
const btns = document.querySelectorAll(".button");
const greenBtns = document.querySelectorAll(".button__dark-green");
const calculator = document.getElementById("calculator");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");
const screen = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".number");

switchButton.addEventListener("click", () => {
    btns.forEach((button) => button.classList.toggle("button--night"));
    calculator.classList.toggle("calculator--night");
    greenBtns.forEach((button) =>
        button.classList.toggle("button__dark-green--night"),
    );
});
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

let numArray = [];
const addNum = () => {
    numArray.push();
};

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", () => {
        screen.innerHTML = screen.innerHTML + numberBtns[i].value;
        numArray.push(numberBtns[i].value);
        if (numArray.length > 10) {
            alert("This number is too long.");
            screen.removeChild(screen.childNodes[0]);
            numArray = [];
        }
        console.log(numArray);
    });
}
resetButton.addEventListener("click", () => {
    screen.removeChild(screen.childNodes[0]);
    numArray = [];
});
