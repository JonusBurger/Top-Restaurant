import "./styles.css";
import buildHomePage from "./buildHome.js"

console.log("Moin Maista");

const pageBuilder = (function () {
    //Setting Up HomePage on start
    buildHomePage();
    const mainDiv = document.getElementById("content");
    console.log("function ran");

    function emptyPage() {
        while (mainDiv.firstChild) {
            mainDiv.remove(mainDiv.lastChild);
        }
    }

    function homePage() {
        emptyPage();
        //  buildHomePage();
        console.log("Page build!")
    }


  

    return { emptyPage, homePage }
})();

// create EventListeners for Buttons
(function () {
    const btnList = document.querySelectorAll("button");
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener("click", pageBuilder.homePage);
    }
    // fix bug for slow page    
})()





// start building each page content