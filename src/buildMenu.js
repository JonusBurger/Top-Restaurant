export default function buildMenu() {
    const mainDiv = document.getElementById("content");
    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center");
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridContact");
    const header = document.createElement("h1");
    header.classList.add("MenuHeader");
    header.innerText = "The Menu"
    gridDiv.appendChild(header);

    const MenuContent = [
        "<h2>Starters</h2><p>Green Salad</p><p>Winter Salad</p><p>Sample Soup</p><p>Pumpkin Soup</p>",
        "<h2>Main Course</h2><p>Schnitzel</p><p>Jägerschnitzel</p><p>Thai Curry</p><p>Udon Nudeln</p><p>yellow Balls</p><p>Nudelbollo</p>",
        "<h2>Desserts</h2><p>Sorbee</p><p>Tiramisu</p><p>Palatschinken</p><p>Eis</p>",
        "<h2>Drinks</h2><p>CoCa Cola</p><p>Water</p><p>Red Wine Primitivo</p><p>Beer</p><p>Whiskey</p><p>Drink of the Day</p>"
    ]

    for (let menuLine of MenuContent) {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("gridCellMenu");
        contentDiv.innerHTML = menuLine;
        gridDiv.appendChild(contentDiv);
    }

    centerDiv.appendChild(gridDiv);
    mainDiv.appendChild(centerDiv);    
}