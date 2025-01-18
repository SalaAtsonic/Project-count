const gridContainer = document.getElementById("gridContainer");
const generateButton = document.getElementById("generateGrid");
const clearButton = document.getElementById("clearButton");
const gridSizeInput = document.getElementById("gridSize");


document.addEventListener("DOMContentLoaded", function () {
    const defaultSize = gridSizeInput.value || 95;
    const numbers = generateNumbers(defaultSize); 
    createGrid(gridContainer, numbers); 
});

/* 	•	DOMContentLoaded: När sidan laddas körs denna funktion.
	•	defaultSize: Hämtar värdet från gridSizeInput. Om inget är valt används standardvärdet 95.
	•	generateNumbers(defaultSize): Genererar en lista med random nummer.
	•	createGrid(gridContainer, numbers): Skapar rutor med dessa nummer och lägger dem i gridContainer. */


generateButton.addEventListener("click", function () {
    const size = gridSizeInput.value || 95;
    const numbers = generateNumbers(size); 
    createGrid(gridContainer, numbers); 
});

/* 	•	När användaren trycker på knappen:
	1.	Hämtas storleken från gridSizeInput (eller används 95 om input är tom).
	2.	Skapas en lista med slumpmässiga nummer med generateNumbers(size).
	3.	Griden uppdateras med de nya numren. */


gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("gridBox")) {
        if (event.target.classList.contains("color")) {
            event.target.classList.remove("color");
        } else {
            event.target.classList.add("color");
        }
    }
});

/* 	•	När du klickar på en ruta (gridBox):
	•	Om rutan redan har klassen color (markerad), tas den bort.
	•	Om rutan inte har color, läggs klassen till.
	•	Varför?
	•	För att användaren ska kunna markera och avmarkera rutor i griden. */


clearButton.addEventListener("click", function () {
    const clearedBoxes = document.querySelectorAll(".gridBox.color");
    for (let i = 0; i < clearedBoxes.length; i++) {
        clearedBoxes[i].textContent = Math.floor(Math.random() * 101); 
        clearedBoxes[i].classList.remove("color"); 
    }
});

/*	1.	Hämtar alla rutor som är markerade med color med querySelectorAll(".gridBox.color").
	2.	För varje markerad ruta:
	•	Math.floor(Math.random() * 101): Ett nytt random nummer mellan 0 och 100 genereras och visas i rutan.
	•	classList.remove("color"): Tar bort markeringen (color) från rutan. */