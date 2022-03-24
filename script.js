const switchButton = document.getElementById("switch");
const btns = document.querySelectorAll(".button");
const greenBtns = document.querySelectorAll(".button__dark-green");
const calculator = document.getElementById("calculator");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");

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
