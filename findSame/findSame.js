const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const resetButton = document.getElementById("reset");
const gridSizeInput = document.getElementById("gridSize");
const textFind = document.getElementById("textFindCopies");
const originalText = textFind.textContent;

document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(defaultSize);
    createGrid(gridContainer, numbers);
});

generateButton.addEventListener("click", function () {
    const gridSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(gridSize);
    createGrid(gridContainer, numbers);
    textFind.textContent = originalText;
});

gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("gridBox")) {
        const number = event.target.textContent;
        const gridItems = gridContainer.children;
        let count = 0;

        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].classList.remove("same");
            if (gridItems[i].textContent == number) {
                gridItems[i].classList.add("same");
                count++;
            }
        }

        textFind.textContent = `${count} copies of the number ${number}`;
    }
});

resetButton.addEventListener("click", function () {
    const gridItems = gridContainer.children;
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.remove("same");
    }
    textFind.textContent = originalText;
});