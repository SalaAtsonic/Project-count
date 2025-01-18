const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const findNumbersButton = document.getElementById("findNumbers");
const gridSizeInput = document.getElementById("gridSize");
const chosenNumberInput = document.getElementById("choosenNumber");


document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(defaultSize); 
    createGrid(gridContainer, numbers);
});


generateButton.addEventListener("click", function () {
    const gridSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(gridSize); 
    createGrid(gridContainer, numbers);
});


function findTwoNumbersThatAddUp(target) {
    const gridItems = gridContainer.children;

    //• Hämtar alla rutor i griden som gridItems (en lista med alla barn i gridContainer).


    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.remove("rightNumber");
    }

    /*•	För varje ruta i griden:
	•	Tar bort klassen rightNumber från tidigare markerade rutor.*/

    for (let i = 0; i < gridItems.length; i++) {
        for (let j = i + 1; j < gridItems.length; j++) {
            if (gridItems[i].textContent * 1 + gridItems[j].textContent * 1 === target * 1) {
                gridItems[i].classList.add("rightNumber");
                gridItems[j].classList.add("rightNumber");
                return; 
            }
        }
    }
}

/* 	•	Loopen jämför varje ruta med alla andra rutor i griden:
	1.	i: Den första rutan.
	2.	j: Nästa ruta efter i.
	3.	Villkoret: Kontrollera om summan av rutornas värden är lika med target:
	•	textContent * 1: Omvandlar textvärdet i rutan till ett tal.
	4.	Om villkoret uppfylls:
	•	Lägg till klassen rightNumber på dessa två rutor för att markera dem.
	•	Avbryt funktionen med return (fler nummer kontrolleras inte). */

findNumbersButton.addEventListener("click", function () {
    const target = chosenNumberInput.value * 1;
    findTwoNumbersThatAddUp(target);
});
/*	•	När knappen för att hitta nummer trycks:
	1.	Hämtas målnumret från chosenNumberInput.
	2.	Anropar funktionen findTwoNumbersThatAddUp(target) för att hitta och markera de två numren. */