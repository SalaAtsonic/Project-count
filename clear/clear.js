const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const clearButton = document.getElementById("clearButton");
const gridSizeInput = document.getElementById("gridSize");

// Generate numbers and create the grid
function generateAndCreateGrid(size) {
    gridContainer.innerHTML = ""; 
    for (let i = 0; i < size; i++) {
        const box = document.createElement("div");
        box.classList.add("gridBox");
        box.textContent = Math.floor(Math.random() * 101);
        gridContainer.appendChild(box);
    }
}

// Toggle "cleared" state or fill cleared boxes
function handleGridClick(event) {
    if (event.target.classList.contains("gridBox")) {
        if (event.target.classList.contains("color")) {
            event.target.classList.remove("color");
        } else {
            event.target.classList.add("color");
        }
    }
}

function fillCleared() {
    const clearedBoxes = document.querySelectorAll(".gridBox.color");
    for (let i = 0; i < clearedBoxes.length; i++) {
        clearedBoxes[i].textContent = Math.floor(Math.random() * 101);
        clearedBoxes[i].classList.remove("color");
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    generateAndCreateGrid(gridSizeInput.value || 95);
});

generateButton.addEventListener("click", function () {
    generateAndCreateGrid(gridSizeInput.value || 95);
});

gridContainer.addEventListener("click", handleGridClick);
clearButton.addEventListener("click", fillCleared);