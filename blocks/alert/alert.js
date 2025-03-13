export default function decorate(block) { 
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    divAlert.innerHTML = "<p><b>" + alertMessage + "</b></p>";    
    
    block.append(divAlert);

    console.log("Alert message: " + divAlert);


}