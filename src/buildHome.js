import wineImg from "../assets/schnitzel.jpg"
import schnitzelImg from "../assets/wine.jpeg"

export default function buildHomePage() {
    console.log("buildHomePage run");
    const mainDiv = document.getElementById("content");
    const bannerDiv = document.createElement("div");
    bannerDiv.classList.add("banner");
    const mainGridDiv = document.createElement("div");
    mainGridDiv.classList.add("mainGrid");
    const headerElement = document.createElement("h1");
    headerElement.innerText = "Jonas Restaurant";
    mainGridDiv.appendChild(headerElement);
    const contentList = [
        "<p>This Restaurant is made and build to blow you mind!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur beatae rem adipisci eligendi exercitationem maxime nam reiciendis eaque blanditiis corrupti sit error quod quam delectus minus veritatis, consequatur libero maiores.</p>",
        `<img src=${schnitzelImg}>`,
        `<img src=${wineImg}>`,
        "<p>This Restaurant is made and build to blow you mind!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur beatae rem adipisci eligendi exercitationem maxime nam reiciendis eaque blanditiis corrupti sit error quod quam delectus minus veritatis, consequatur libero maiores.</p>"
    ]
    for (let i = 0; i<4; i++){
        const cellDiv = document.createElement("div");
        cellDiv.innerHTML = contentList[i];
        cellDiv.classList.add("cell");
        mainGridDiv.appendChild(cellDiv);
    }
}