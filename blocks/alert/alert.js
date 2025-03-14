export default function decorate(block) {

    function CloseAlert() {
        const element = document.getElementsByClassName("alert-wrapper");
        element[0].remove();
        localStorage.setItem('message-alert', 'close');
        console.log("Close Alert");
    }
    
    const alertMessage =  block.textContent.trim();
    const pAlert       =  document.createElement("p");
    const aClose       =  document.createElement("a");
    const pStandard    =  block.querySelector("p");

    aClose.innerHTML = "CHIUDI MESSAGGIO";
    aClose.id = "CloseLink";
    pAlert.innerHTML = alertMessage;
    pStandard.replaceWith(pAlert);
    block.append(aClose);

    console.log("Page: " + window.location.href.search("universal-editor"));
       
    document.getElementById("CloseLink").onclick = CloseAlert;    
    
    if ( localStorage.getItem("message-alert") == "close" ) {
            CloseAlert();
     }

}
