const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const newRandomButton = document.getElementById("newRandom");
const removeButton = document.getElementById("removeButton");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");
const removeDisplay = document.getElementById("removeDisplay");
const gridSizeInput = document.getElementById("gridSize");

let randomNumber = null;

// Function to create the grid
function createGrid(gridSize) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridBox");
        gridItem.textContent = Math.floor(Math.random() * 101);
        gridContainer.appendChild(gridItem);
    }
    randomNumberDisplay.value = "-";
    removeDisplay.value = "-";
}

// Initialize the grid on page load
document.addEventListener("DOMContentLoaded", function () {
    createGrid(parseInt(gridSizeInput.value) || 95);
});

// Generate a new grid when "Create" is clicked
generateButton.addEventListener("click", function () {
    const gridSize = parseInt(gridSizeInput.value) || 95;
    createGrid(gridSize);
});

// Highlight numbers matching the random number
newRandomButton.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".gridBox");
    randomNumber = Math.floor(Math.random() * 101);
    randomNumberDisplay.value = randomNumber;
    for (let i = 0; i < gridItems.length; i++) {
        if (parseInt(gridItems[i].textContent) === randomNumber) {
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