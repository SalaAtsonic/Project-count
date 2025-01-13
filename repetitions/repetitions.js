const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const gridSizeInput = document.getElementById("gridSize");
const repeatedNumbersDisplay = document.getElementById("repeatedNumbers");
const missingNumbersDisplay = document.getElementById("missingNumbers");

let allNumbers = [];

// Generate and display the grid on page load
document.addEventListener("DOMContentLoaded", function () {
    initializeGrid(gridSizeInput.value || 95);
});

generateButton.addEventListener("click", function () {
    initializeGrid(gridSizeInput.value || 95);
});

// Initialize grid and display
function initializeGrid(size) {
    allNumbers = [];
    gridContainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * 101);
        allNumbers.push(randomNum);

        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.textContent = randomNum;
        gridContainer.appendChild(gridBox);
    }
    showMostRepeated();
    showMissingNumbers();
}

// Find and display the most repeated numbers
function showMostRepeated() {
    let counts = {};
    let maxCount = 0;
    let repeated = [];

    for (let i = 0; i < allNumbers.length; i++) {
        const num = allNumbers[i];
        if (!counts[num]) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            repeated = [num];
        } else if (counts[num] === maxCount) {
            let alreadyExists = false;
            for (let j = 0; j < repeated.length; j++) {
                if (repeated[j] == num) { 
                    alreadyExists = true;
                    break;
                }
            }
            if (!alreadyExists) {
                repeated.push(num);
            }
        }
    }
    repeatedNumbersDisplay.textContent = repeated.join(", ") + ` (Repeated ${maxCount} times)`;

    highlight(repeated);
}

// Highlight repeated numbers in the grid
function highlight(repeated) {
    for (let i = 0; i < gridContainer.children.length; i++) {
        const box = gridContainer.children[i];
        let isRepeated = false;
        for (let j = 0; j < repeated.length; j++) {
            if (box.textContent == repeated[j]) { 
                isRepeated = true;
                break;
            }
        }
        if (isRepeated) {
            box.classList.add("repeat");
        } else {
            box.classList.remove("repeat");
        }
    }
}

// Find and display missing numbers
function showMissingNumbers() {
    let missing = [];
    for (let i = 0; i <= 100; i++) {
        let found = false;
        for (let j = 0; j < allNumbers.length; j++) {
            if (allNumbers[j] == i) { 
                found = true;
                break;
            }
        }
        if (!found) {
            missing.push(i);
        }
    }
    missingNumbersDisplay.textContent = missing.join(", ");
}