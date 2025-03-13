export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    divAlert.setAttribute('id', "div-alert");
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">Ok, chiudi finestra</a></p>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);

    document.getElementById("CloseLink").onclick = CloseAlert;
    
    function CloseAlert() {
        const element = document.getElementById("div-02");
        element.remove();
        console.log("Close Alert");

    }
}



