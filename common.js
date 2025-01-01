function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
function fillGrid(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "";
        for (let i = 0; i < 10; i++) {
            const num = document.createElement("div");
            cell.textContetnt = getRandomNumber();
            cell.classList.add("grid-cell");
            grid.appendChild(cell);
        }
    }
}

function addHomeLink() {
    const homeLink = document.createElement("a");
    homeLink.href = "../index.html";
    homeLink.textContent = "Home";
    document.body.appendChild(homeLink);
}