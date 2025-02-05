import "./styles.css";
import buildHomePage from "./buildHome.js"

console.log("Moin Maista");

const pageBuilder = (function () {
    //Setting Up HomePage on start
    buildHomePage();
    const mainDiv = document.getElementById("content");
    console.log("function ran");

    function emptyPage() {  
        while (mainDiv.lastChild) {
            mainDiv.removeChild(mainDiv.lastChild);
        }   
    }

    function homePage() {
        emptyPage();
        buildHomePage();
        console.log("Page build!")
    }


  

    return { emptyPage, homePage }
})();

// create EventListeners for Buttons
document.addEventListener('DOMContentLoaded', () => {
    const btnList = document.querySelectorAll("button");
    const pageList = [
        pageBuilder.homePage,
        pageBuilder.homePage,
        pageBuilder.homePage,
        pageBuilder.homePage
    ]
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].removeEventListener("click", pageList[i]); // Remove existing listener
        btnList[i].addEventListener("click", pageList[i]); // Add new listener
        console.log(`build buttonlistener ${i}`);
    }
    // fix bug for slow page    
});





// start building each page content