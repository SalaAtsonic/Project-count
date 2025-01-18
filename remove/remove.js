const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const newRandomButton = document.getElementById("newRandom");
const removeButton = document.getElementById("removeButton");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");
const removeDisplay = document.getElementById("removeDisplay");
const gridSizeInput = document.getElementById("gridSize");

let randomNumber = null;

/*	•	randomNumber: Sparar det random numret som väljs när vi trycker på “New Random”-knappen.
	•	Börjar som null eftersom inget nummer är valt från början. */


document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = (gridSizeInput.value * 1) || 95; 
    const numbers = generateNumbers(defaultSize); 
    createGrid(gridContainer, numbers); 
    randomNumberDisplay.value = "-";
    removeDisplay.value = "-";
});
/* 1.	DOMContentLoaded: Körs när sidan är klar att visas.
	2.	gridSizeInput.value * 1: Hämtar storleken på griden från inputfältet. Om inget värde finns, används 95.
	•	* 1 omvandlar textvärdet till ett nummer.
	3.	generateNumbers(defaultSize): Skapar en lista med random nummer för griden.
	4.	createGrid(gridContainer, numbers): Fyller griden med dessa nummer.
	5.	Reset-display: Visar ett "-" för slumpnumret och antal borttagna nummer. */

generateButton.addEventListener("click", function () {
    const gridSize = (gridSizeInput.value * 1) || 95; 
    const numbers = generateNumbers(gridSize); 
    createGrid(gridContainer, numbers); 
    randomNumberDisplay.value = "-";
    removeDisplay.value = "-";
});

/* 	•	När användaren trycker på “Create”-knappen:
	1.	Hämtar storleken från gridSizeInput.
	2.	Skapar nya slumpnummer med generateNumbers.
	3.	Fyller griden med dessa nummer med createGrid.
	4.	Återställer displayen för slumpnummer och borttagna nummer. */


newRandomButton.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".gridBox");
    randomNumber = Math.floor(Math.random() * 101);
    randomNumberDisplay.value = randomNumber;
    for (let i = 0; i < gridItems.length; i++) {
        if ((gridItems[i].textContent * 1) === randomNumber) { 
            gridItems[i].classList.add("highlight");
        } else {
            gridItems[i].classList.remove("highlight");
        }
    }
});

/* 	1.	Math.random() * 101: Genererar ett random mellan 0 och 100.
	2.	gridItems: Hämtar alla rutor från griden.
	3.	Highlight-rutor:
	•	Loopen går igenom alla rutor.
	•	Om texten i rutan matchar det random numret, läggs klassen highlight till.
	•	Om inte, tas highlight bort. */


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

/* 	1.	Hämta markerade rutor:
	•	Hämtar alla rutor med klassen highlight.
	2.	Byt ut text:
	•	Om en ruta är markerad (highlight), ändras texten till "X", och klassen removed läggs till.
	•	Tar även bort klassen highlight.
	3.	Visa resultat:
	•	Om några rutor togs bort, uppdateras displayen med antal borttagna rutor.
	•	Om inga rutor togs bort, visas Nothing to remove. */