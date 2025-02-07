import "./styles.css";
import buildHomePage from "./buildHome.js"
import buildContactPage from "./buildContact.js"

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
        console.log("Build Homepage!");
    }

    function contactPage() {
        emptyPage();
        buildContactPage();
        console.log("Build Contact Page!");
    }


  

    return { emptyPage, homePage, contactPage }
})();

// create EventListeners for Buttons
document.addEventListener('DOMContentLoaded', () => {
    const btnList = document.querySelectorAll("button");
    const pageList = [
        pageBuilder.homePage,
        pageBuilder.homePage,
        pageBuilder.homePage,
        pageBuilder.contactPage
    ]
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].removeEventListener("click", pageList[i]); // Remove existing listener
        btnList[i].addEventListener("click", pageList[i]); // Add new listener
        console.log(`build buttonlistener ${i}`);
    }  
});





// start building each page content - NS. Build Menu