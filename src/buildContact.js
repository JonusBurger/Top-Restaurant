export default function buildContact() {
    const mainDiv = document.getElementById("content");
    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center");
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridContact");
    const header = document.createElement("h1");
    header.classList.add("contactHeader");
    header.innerText = "Contact Information"
    gridDiv.appendChild(header);

    const contactInfoContent = [
        "<h2>Main Contact Info</h2><p>Name: Jabus Lurger</p><p>Mail: Mailcool@something.cc</p>",
        "<h2>Adress</h2><p>City: Frankfurt</p><p>Street: SuperStreet 12</p><p>Zip-Code:60439</p>",
        "<p>Follow us on our Social Media Platform under <a href=\"google.com\" class=\"linkButton\">Follow!</a>"
    ]

    for (let infoLine of contactInfoContent) {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("gridCell");
        contentDiv.innerHTML = infoLine;
        gridDiv.appendChild(contentDiv);
    }

    centerDiv.appendChild(gridDiv);
    mainDiv.appendChild(centerDiv);
}