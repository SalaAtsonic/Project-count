const clearButton = document.getElementById("clearSelection");
let totalDisplay = document.getElementById("totalDisplay");
let selectionDisplay = document.getElementById("selectionDisplay");
const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const gridSizeInput = document.getElementById("gridSize");

let selectedSum = 0;
let allNumbers = [];

// The grid on page load
document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = (gridSizeInput.value * 1) || 95; 
    allNumbers = generateNumbers(defaultSize); // Call from common.js
    createGrid(gridContainer, allNumbers); // Call from common.js
    totalDisplay.textContent = calculateTotal(allNumbers); 
});

selectionDisplay.textContent = "-";

generateButton.addEventListener("click", function () {
    const size = (gridSizeInput.value * 1) || 0;
    allNumbers = generateNumbers(size); // Call from common.js
    createGrid(gridContainer, allNumbers); // Call from common.js
    totalDisplay.textContent = calculateTotal(allNumbers);
});

clearButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".gridBox");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
    }
    selectedSum = 0;
    selectionDisplay.textContent = "-";
});

gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("gridBox")) {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
            selectedSum -= (event.target.textContent * 1);
        } else {
            event.target.classList.add("selected");
            selectedSum += (event.target.textContent * 1);
        }
        selectionDisplay.textContent = selectedSum;
    }
});

function calculateTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}