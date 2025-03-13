export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();

    divAlert.setAttribute('id', "alert-container");
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">X</a></p>";
    
    console.log(block.childNodes[0]);
    console.log(block.childNodes);
    
    //block.replaceWith(divAlert);
    
    document.getElementById("CloseLink").onclick = CloseAlert;
    
    function CloseAlert() {
        const element = document.getElementById("alert-container");
        element.remove();
        console.log("Close Alert");
    }
}



