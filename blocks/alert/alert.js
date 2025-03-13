export default function decorate(block) {
    
    const alertMessage =  block.textContent.trim();
    const pAlert       =  document.createElement("p");
    const aClose       =  document.createElement("a");
    const pStandard    =  block.querySelector("p");

    //pAlert.innerHTML = alertMessage + "<a id=\"CloseLink\">X</a>";
    //pStandard.replaceWith(pAlert);

    aClose.innerHTML = "X";
    aClose.id = "CloseLink";
    pAlert.innerHTML = alertMessage;
    pAlert.after(aClose);
    pStandard.replaceWith(pAlert);

    if (  (localStorage.getItem("message-alert") == "close") &&  (document.getElementById("exc") == "null") )  {
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



