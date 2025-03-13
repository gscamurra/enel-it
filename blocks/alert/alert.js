export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");

    divAlert.setAttribute('id', "alert-container");
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">X</a></p>";     
    //block.replaceWith(divAlert);
    
    document.getElementById("CloseLink").onclick = CloseAlert;
    
    function CloseAlert() {
        const element = document.getElementById("alert-container");
        element.remove();
        console.log("Close Alert");
    }
}



