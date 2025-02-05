import "./styles.css";
import buildHomePage from "./buildHome.js"

console.log("Moin Maista");

function buildPage() {
    const mainDiv = document.getElementById("content");

    function emptyPage() {
        while (mainDiv.firstChild) {
            mainDiv.remove(mainDiv.lastChild);
        }
    }

    return { emptyPage }
} 

buildHomePage();

// Make buildPage have a default state

// create EventListeners for Buttons

// start building each page content