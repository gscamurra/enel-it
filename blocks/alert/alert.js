export default function decorate(block) { 
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    divAlert.innerHTML("<b>" + alertMessage + "</b>");    
    
    block.append(divAlert);

    console.log("Alert message: " + divAlert);


}