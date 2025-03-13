export default function decorate(block) {
    
    function CloseAlert() {
        console.log("Event close Alert");
    }

    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "</p><a id=\"closeLink\">Ok, chiudi finestra</a>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);
}