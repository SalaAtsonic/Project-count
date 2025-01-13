const header = document.querySelector("header");

// Create Home Button
const homeButton = document.createElement("a");
homeButton.textContent = "Home";
homeButton.href = "../index.html"; 
homeButton.classList.add("navLink");
header.appendChild(homeButton);

// Function to generate random numbers
function generateNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}

// Function to create the grid
function createGrid(gridContainer, numbers) {
    gridContainer.innerHTML = ""; // Clear existing grid
    for (let i = 0; i < numbers.length; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridBox");
        gridItem.textContent = numbers[i];
        gridContainer.appendChild(gridItem);
    }
}

// Calculate the Sum of an Array
function calculateTotal(numbers) {
    return numbers.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}