export default function decorate(block) {
    
    const alertMessage =  block.textContent.trim();
    const pAlert       =  document.createElement("p");
    const pStandard    =  block.querySelector("p");

    console.log("Ps: " + pStandard);

    pAlert.innerHTML = alertMessage + "<a id=\"CloseLink\">X</a>";
    
    block.append(pAlert);
    
    console.log(pAlert);
    
    document.getElementById("CloseLink").onclick = CloseAlert;    
    function CloseAlert() {
        const element = document.getElementsByClassName("alert-wrapper");
        element[0].remove();
        console.log("Close Alert");
    }
}



