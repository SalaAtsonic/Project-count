const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const newRandomButton = document.getElementById("newRandom");
const removeButton = document.getElementById("removeButton");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");
const removeDisplay = document.getElementById("removeDisplay");
const gridSizeInput = document.getElementById("gridSize");

let randomNumber = null;

// Initialize the grid on page load
document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = (gridSizeInput.value * 1) || 95; // Convert to number using * 1
    const numbers = generateNumbers(defaultSize); // Call from common.js
    createGrid(gridContainer, numbers); // Call from common.js
    randomNumberDisplay.value = "-";
    removeDisplay.value = "-";
});

// Generate a new grid when "Create" is clicked
generateButton.addEventListener("click", function () {
    const gridSize = (gridSizeInput.value * 1) || 95; // Convert to number using * 1
    const numbers = generateNumbers(gridSize); // Call from common.js
    createGrid(gridContainer, numbers); // Call from common.js
    randomNumberDisplay.value = "-";
    removeDisplay.value = "-";
});

// Highlight numbers matching the random number
newRandomButton.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".gridBox");
    randomNumber = Math.floor(Math.random() * 101);
    randomNumberDisplay.value = randomNumber;
    for (let i = 0; i < gridItems.length; i++) {
        if ((gridItems[i].textContent * 1) === randomNumber) { // Convert text to number using * 1
            gridItems[i].classList.add("highlight");
        } else {
            gridItems[i].classList.remove("highlight");
        }
    }
});

// Remove highlighted numbers
removeButton.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".gridBox");
    let removedCount = 0;
    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].classList.contains("highlight")) {
            gridItems[i].textContent = "X";
            gridItems[i].classList.remove("highlight");
            gridItems[i].classList.add("removed");
            removedCount++;
        }
    }
    if (removedCount > 0) {
        removeDisplay.value = `${randomNumber} removed ${removedCount} times`;
    } else {
        removeDisplay.value = "Nothing to remove";
    }
});