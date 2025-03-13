export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    const alertLink = document.createElement('a');
    alertLink.setAttribute("onclick","CloseMessage()");
    alertLink.appendChild(document.createTextNode("This is link"));
    
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">Ok, chiudi finestra</a></p>" + alertLink;     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);
}