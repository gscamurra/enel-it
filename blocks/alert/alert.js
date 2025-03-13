export default function decorate(block) { 
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "</p><a id=\"closeLink\">Ok, chiudi finestra</a>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);

}