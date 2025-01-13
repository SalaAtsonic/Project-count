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
    const defaultSize = parseInt(gridSizeInput.value) || 95; 
    allNumbers = generateNumbers(defaultSize); 
    createGrid(allNumbers); 
    totalDisplay.textContent = calculateTotal(allNumbers); 
});

selectionDisplay.textContent = "-";

generateButton.addEventListener("click", function () {
    const size = parseInt(gridSizeInput.value) || 0;
    allNumbers = generateNumbers(size);
    createGrid(allNumbers);
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
            selectedSum -= parseInt(event.target.textContent);
        } else {
            event.target.classList.add("selected");
            selectedSum += parseInt(event.target.textContent);
        }
        selectionDisplay.textContent = selectedSum;
    }
});

function generateNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}

function createGrid(numbers) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
        const box = document.createElement("div");
        box.classList.add("gridBox");
        box.textContent = numbers[i];
        gridContainer.appendChild(box);
    }
}

function calculateTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}