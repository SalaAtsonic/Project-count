const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const resetButton = document.getElementById("reset");
const gridSizeInput = document.getElementById("gridSize");
const textFind = document.getElementById("textFindCopies");
const originalText = textFind.textContent;

// Generate numbers for the grid
function generateNumbers(size) {
    const numbers = [];
    let i = 0;
    while (i < size) {
        numbers.push(Math.floor(Math.random() * 101));
        i++;
    }
    return numbers;
}

// Create the grid
function createGrid(numbers) {
    gridContainer.innerHTML = ""; 
    let i = 0;
    while (i < numbers.length) {
        const box = document.createElement("div");
        box.classList.add("gridBox");
        box.textContent = numbers[i];
        gridContainer.appendChild(box);
        i++;
    }
}

// Highlight matching numbers
function highlightMatchingNumbers(number) {
    const gridItems = gridContainer.children;
    let count = 0;
    let i = 0;
    while (i < gridItems.length) {
        gridItems[i].classList.remove("same");
        if (gridItems[i].textContent == number) {
            gridItems[i].classList.add("same");
            count++;
        }
        i++;
    }
    return count;
}

// Initialize grid on page load
document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(defaultSize);
    createGrid(numbers);
});

// Generate grid on button click
generateButton.addEventListener("click", function () {
    const gridSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(gridSize);
    createGrid(numbers);
    textFind.textContent = originalText;
});

// Handle grid box clicks
gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("gridBox")) {
        const selectedNumber = event.target.textContent;
        const count = highlightMatchingNumbers(selectedNumber);
        textFind.textContent = `${count} copies of the number ${selectedNumber}`;
    }
});

// Reset highlights
resetButton.addEventListener("click", function () {
    const gridItems = gridContainer.children;
    let i = 0;
    while (i < gridItems.length) {
        gridItems[i].classList.remove("same");
        i++;
    }
    textFind.textContent = originalText;
});