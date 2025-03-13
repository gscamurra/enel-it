export default function decorate(block) {
    
    const alertMessage =  block.textContent.trim();
    const pAlert       =  document.createElement("p");
    const pStandard    =  block.querySelector("p");

    pAlert.innerHTML = alertMessage + "<a id=\"CloseLink\">X</a>"; 
    pStandard.replaceWith(pAlert);
    
    document.getElementById("CloseLink").onclick = CloseAlert;    
    function CloseAlert() {
        const element = document.getElementsByClassName("alert-wrapper");
        element[0].remove();
        console.log("Close Alert");
    }
}



