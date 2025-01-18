const header = document.querySelector("header");


const homeButton = document.createElement("a");
homeButton.textContent = "Home";
homeButton.href = "../index.html"; 
homeButton.classList.add("navLink");
header.appendChild(homeButton);

/* Vad gör den?
	•	Den skapar en hemknapp som länkar tillbaka till startsidan (../index.html).
	•	Knappen läggs till i sidhuvudet (header).

Hur fungerar det?
	1.	header hämtar sidhuvudets element från HTML.
	2.	Ett a-element (länk) skapas med document.createElement("a").
	3.	Texten “Home” och länken till startsidan (href) läggs till.
	4.	En CSS-klass (navLink) läggs till för att styla knappen.
	5.	Knappen läggs till i header med appendChild().*/


function generateNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}

/* Vad gör den?
	•	Skapar en lista med random siffror mellan 0 och 100.
	•	Antalet siffror bestäms av count.

Hur fungerar det?
	1.	En tom lista (numbers) skapas.
	2.	En loop körs count gånger.
	3.	För varje iteration skapas ett random nummer och läggs till i listan.
	4.	Till slut returneras listan. */

function createGrid(gridContainer, numbers) {
    gridContainer.innerHTML = ""; 
    for (let i = 0; i < numbers.length; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridBox");
        gridItem.textContent = numbers[i];
        gridContainer.appendChild(gridItem);
    }
}

/* Vad gör den?
	•	Skapar ett rutnät av rutor, där varje ruta innehåller ett nummer från listan numbers.

Hur fungerar det?
	1.	gridContainer.innerHTML = "" tömmer rutnätet innan nya rutor skapas.
	2.	En loop går igenom listan numbers.
	3.	För varje nummer skapas en ruta (div) med CSS-klassen gridBox.
	4.	Numret visas i rutan med textContent.
	5.	Rutan läggs till i rutnätsbehållaren (gridContainer).

Exempel:
Om listan är [5, 10, 15], skapas tre rutor:
	•	Ruta 1: “5”
	•	Ruta 2: “10”
	•	Ruta 3: “15” */


function calculateTotal(numbers) {
    return numbers.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}

/* Vad gör den?
	•	Räknar ut summan av alla siffror i listan numbers.

Hur fungerar det?
	1.	reduce() går igenom varje nummer i listan.
	2.	Varje nummer läggs till i en sum-variabel som börjar på 0.
	3.	Resultatet (summan) returneras. */