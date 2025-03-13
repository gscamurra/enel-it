export default function decorate(block) {
    
    document.getElementById("CloseLink").onclick = function() {
        console.log("Event close Alert");
    }

    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">Ok, chiudi finestra</a></p>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);
}