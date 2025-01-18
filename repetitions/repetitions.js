const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const gridSizeInput = document.getElementById("gridSize");
const repeatedNumbersDisplay = document.getElementById("repeatedNumbers");
const missingNumbersDisplay = document.getElementById("missingNumbers");

let allNumbers = []; // allNumbers: En lista som lagrar alla genererade nummer.


document.addEventListener("DOMContentLoaded", function () {
    initializeGrid(gridSizeInput.value * 1 || 95);
});

/*	•	När sidan laddas körs funktionen initializeGrid med standardstorleken 95 (om inget annat anges).
	•	gridSizeInput.value * 1: Tar värdet från input och gör det till ett nummer (genom att multiplicera med 1).*/

generateButton.addEventListener("click", function () {
    initializeGrid(gridSizeInput.value * 1 || 95);
});


function initializeGrid(size) {
    allNumbers = generateNumbers(size); 
    createGrid(gridContainer, allNumbers); 
    displayRepeatedNumbers();
    displayMissingNumbers();
}

/* 	•	generateNumbers(size): Skapar en lista med random nummer.
	•	createGrid: Skapar rutorna och visar siffrorna på sidan.
	•	displayRepeatedNumbers: Hittar och visar de mest upprepade numren.
	•	displayMissingNumbers: Hittar och visar vilka nummer som saknas mellan 0 och 100. */


function displayRepeatedNumbers() {
    let counts = {};
    let maxCount = 0;
    let repeated = [];

    /*• counts: En objekt som håller koll på hur många gånger varje nummer förekommer.
	•	maxCount: Det största antalet gånger som ett nummer visas.
	•	repeated: En lista med de nummer som upprepas flest gånger. */

    for (let i = 0; i < allNumbers.length; i++) {
        const num = allNumbers[i];
        if (counts[num] == undefined) {
            counts[num] = 1;
        } else {
            counts[num] += 1;
        }

     /*•Loopen går igenom varje nummer i allNumbers.
	•	if (counts[num] == undefined):
	•	Om det är första gången numret visas (undefined), sätt dess räknare till 1.
	•	else:
	•	Om numret redan finns i counts, öka dess räknare med 1. */

        if (counts[num] > maxCount) {
            maxCount = counts[num];
            repeated = [num];
        } else if (counts[num] === maxCount) {
            let exists = false;
            for (let j = 0; j < repeated.length; j++) {
                if (repeated[j] == num) {
                    exists = true;
                    break;
                }
            }
            if (exists == false) {
                repeated[repeated.length] = num;
            }
        }
    }
    /*•	if (counts[num] > maxCount):
	•	Om numret visas fler gånger än maxCount, uppdatera maxCount och låt repeated bara innehålla detta nummer.
	•	else if (counts[num] === maxCount):
	•	Om detta nummer har samma räknare som maxCount, kontrollera om det redan finns i repeated.
	•	Om det inte finns, lägg till det i repeated. */

    repeatedNumbersDisplay.textContent =
        repeated.join(", ") + ` (Repeated ${maxCount} times)`;
    highlightNumbers(repeated); // Funktionen uppdaterar texten i repeatedNumbersDisplay och markerar rutorna som innehåller de upprepade numren.
}


function highlightNumbers(repeated) {
    for (let i = 0; i < gridContainer.children.length; i++) {
        const box = gridContainer.children[i];
        let isRepeated = false;
        for (let j = 0; j < repeated.length; j++) {
            if (box.textContent * 1 == repeated[j]) {
                isRepeated = true;
                break;
            }
        }
        if (isRepeated == true) {
            box.classList.add("repeat");
        } else {
            box.classList.remove("repeat");
        }
    }
}

/* 	•	gridContainer.children:
Hämtar alla rutor (divar) i grid som skapades tidigare.
	•	Första loopen:
Går igenom varje ruta och kollar om dess innehåll (textContent) matchar något nummer i repeated.
	•	Andra loopen:
Jämför rutan med varje nummer i repeated. Om det matchar, sätts isRepeated till true.
	•	Markera eller avmarkera rutan:
Om isRepeated är true, läggs klassen "repeat" till rutan, vilket ändrar dess utseende. Om det är false, tas klassen bort.*/

/*	•	gridContainer.children: Hämtar alla rutor i rutnätet.
	•	För varje ruta kontrollerar funktionen om den innehåller ett av de mest upprepade numren.
	•	classList.add("repeat"): Lägger till en klass som markerar rutan.
	•	classList.remove("repeat"): Tar bort markeringen från rutan om den inte längre är relevant.*/


function displayMissingNumbers() {
    let missing = [];
    for (let i = 0; i <= 100; i++) {
        let found = false;
        for (let j = 0; j < allNumbers.length; j++) {
            if (allNumbers[j] == i) {
                found = true;
                break;
            }
        }
        if (found == false) {
            missing[missing.length] = i;
        }
    }

    missingNumbersDisplay.textContent = missing.join(", ");
}

/* 	•	let missing = [];
Skapar en lista för att lagra alla nummer som saknas mellan 0 och 100.
	•	Första loopen:
Går igenom alla nummer från 0 till 100.
	•	Andra loopen:
Kollar om numret i finns i allNumbers.
	•	Om found == false:
Om numret inte hittas i allNumbers, läggs det till i listan missing.
	•	missingNumbersDisplay.textContent:
Uppdaterar texten som visar alla saknade nummer, separerade med kommatecken.*/

/* 	•	missing: En lista som lagrar alla saknade nummer mellan 0–100.
	•	Funktionen går igenom alla nummer mellan 0 och 100 och kollar om de finns i listan allNumbers.
	•	Om ett nummer saknas läggs det till i listan missing.
	•	Resultatet visas i missingNumbersDisplay. */