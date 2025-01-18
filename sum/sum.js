const clearButton = document.getElementById("clearSelection");
let totalDisplay = document.getElementById("totalDisplay");
let selectionDisplay = document.getElementById("selectionDisplay");
const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const gridSizeInput = document.getElementById("gridSize");

let selectedSum = 0;
let allNumbers = [];


document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = (gridSizeInput.value * 1) || 95; 
    allNumbers = generateNumbers(defaultSize); 
    createGrid(gridContainer, allNumbers); 
    totalDisplay.textContent = calculateTotal(allNumbers); 
});

selectionDisplay.textContent = "-";

/*  •   Vad gör gridSizeInput.value?
Den hämtar det du skrivit in i inputfältet för att veta hur många rutor som ska skapas i gridet.
Observera: Det du skriver in är alltid en text, även om det ser ut som ett nummer.
	•	Varför * 1?
Det gör om texten till ett nummer.
Exempel: "10" * 1 blir 10.
	•	Varför || 95?
Om rutan är tom eller felaktig (t.ex. inga siffror), så används standardvärdet 95. */

/* 	•	Vad gör den?
        När sidan laddas skapas en grid (rutnät) med siffror.
	1.	Tar värdet från gridSizeInput (standard är 95 om inget är inmatat).
	2.	generateNumbers skapar en lista med random nummer.
	3.	createGrid bygger rutor i griden och fyller dem med numren.
	4.	Totalen av alla siffror visas i totalDisplay. */

generateButton.addEventListener("click", function () {
    const size = (gridSizeInput.value * 1) || 0; // Gör om användarens inmatning till ett nummer. Om rutan är tom, sätts värdet till 0.
    allNumbers = generateNumbers(size); 
    createGrid(gridContainer, allNumbers); 
    totalDisplay.textContent = calculateTotal(allNumbers);
});

/* 	•	Vad gör den? När knappen “Create” klickas:
	1.	Tar in storleken från användaren.
	2.	Skapar nya random nummer (generateNumbers).
	3.	Bygger en ny grid och uppdaterar den totala summan (calculateTotal). */

clearButton.addEventListener("click", function () {
    const items = document.querySelectorAll(".gridBox");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
    }
    selectedSum = 0;
    selectionDisplay.textContent = "-";
});

/* 	•	Vad gör for-loopen?
Den går igenom varje ruta en i taget.
	•	Vad betyder let i = 0?
Loopen börjar med första rutan (index 0).
	•	Vad betyder i < items.length?
Fortsätt loopen tills alla rutor är kontrollerade.
	•	Vad gör i++?
Flyttar till nästa ruta i listan. */

/* 	•	Vad gör den? När “Clear” klickas:
	1.	Tar bort markeringar från alla rutor.
	2.	Nollställer summan av valda siffror (selectedSum) och visar “-” i selectionDisplay. */

gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("gridBox")) {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
            selectedSum -= (event.target.textContent * 1); //Tar bort värdet i rutan från den totala summan.
        } else {
            event.target.classList.add("selected");
            selectedSum += (event.target.textContent * 1); // Lägger till värdet i rutan till den totala summan.
        }
        selectionDisplay.textContent = selectedSum;
    }
});

/*	•	Vad är event?
När du klickar någonstans, skapar webbläsaren ett “event” som innehåller info om vad som hände (t.ex. vad du klickade på).
	•	Vad betyder event.target?
Det är exakt det du klickade på.
Exempel: Om du klickar på en ruta i gridet, så pekar event.target på den rutan.
	•	Varför använda det?
För att veta om du klickade på något viktigt, t.ex. en ruta, och inte på något tomt.*/

/*	•	Vad gör classList.contains?
Det kollar om det du klickade på har klassen "gridBox".
	•	Varför är det viktigt?
För att se till att användaren verkligen klickade på en ruta i gridet och inte någon annanstans. */

/* 	•	Vad gör den?
	1.	När du klickar på en ruta (gridBox), markerar eller avmarkerar den.
	2.	Uppdaterar selectedSum baserat på rutans innehåll (lägger till eller tar bort).
	3.	Visar summan av de markerade rutorna i selectionDisplay. */

function calculateTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

/* •	Vad gör funktionen?
Den räknar ihop alla siffror i en lista och ger en totalsumma.
	•	Varför sum = 0?
Startar summan på noll innan något adderas.
	•	Vad gör sum += numbers[i]?
Addar varje siffra i listan till totalsumman. */

/* •	Vad gör den? 

Summerar alla nummer i listan och returnerar totalen. 
	•	Huvudfunktioner:
	1.	Skapar en grid med random nummer.
	2.	Låter användaren markera rutor och beräknar summan av de valda.
	3.	Möjliggör att nollställa val och generera nya nummer.

*/