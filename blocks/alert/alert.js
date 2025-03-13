export default function decorate(block) {
    
    const alertMessage =  block.textContent.trim();
    const pAlert       =  document.createElement("p");
    const pStandard    =  block.querySelector("p");

    pAlert.innerHTML = alertMessage + "<a id=\"CloseLink\">X</a>";
    pStandard.replaceWith(pAlert);

    if ( (localStorage.getItem("message-alert") == "close") && window.location.href.search("universal-editor") < 0 ) {
        CloseAlert();
    }
        
    document.getElementById("CloseLink").onclick = CloseAlert;    
    function CloseAlert() {
        const element = document.getElementsByClassName("alert-wrapper");
        element[0].remove();
        localStorage.setItem('message-alert', 'close');
        console.log("Close Alert");
    }
}



