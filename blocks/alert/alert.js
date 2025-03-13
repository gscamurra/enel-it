export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();
    const pAlert = document.createElement("p");

    pAlert.innerHTML = alertMessage + "<a id=\"CloseLink\">X</a>";
    console.log("Node: " + block.children[0].val());
    block.append(pAlert);
    
    document.getElementById("CloseLink").onclick = CloseAlert;    
    function CloseAlert() {
        const element = document.getElementById("alert-container");
        element.remove();
        console.log("Close Alert");
    }
}



