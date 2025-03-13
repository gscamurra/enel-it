export default function decorate(block) { 
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    divAlert.innerHTML("<p>" + alertMessage + "</p>");    
    
    block.append(divAlert);

    console.log("Alert message: " + divAlert);


}