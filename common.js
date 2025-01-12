const header = document.querySelector("header");

// Create Home Button
const homeButton = document.createElement("a");
homeButton.textContent = "Home";
homeButton.href = "../index.html"; 
homeButton.classList.add("navLink");
header.appendChild(homeButton);

// Function to Generate Random Numbers
function generateNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}

// Function to Render the Grid
function createGrid(numbers, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 
    numbers.forEach(function (num) {
        const box = document.createElement("div");
        box.classList.add("gridBox");
        box.textContent = num;
        container.appendChild(box);
    });
}

// Calculate the Sum of an Array
function calculateTotal(numbers) {
    return numbers.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}