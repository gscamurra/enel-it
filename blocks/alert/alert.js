export default function decorate(block) { 
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "</p>";     
    block.replaceWith(divAlert);
    block.classList.add("alert-box");

    console.log("Alert message: " + divAlert);

}