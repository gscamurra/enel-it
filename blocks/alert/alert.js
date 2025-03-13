export default function decorate(block) {
    
    function CloseAlert() {
        console.log("Event close Alert");
    }
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    var closeLink = document.createElement("a");

    closeLink.href = "javascript:void(0)";
    closeLink.id = "CloseLink";
    closeLink.textContent = "Ok, chiudi finestra";


    divAlert.innerHTML = "<p>" + alertMessage + "</p>" + closeLink;     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);

}