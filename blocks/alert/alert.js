export default function decorate(block) {
    
    window.addEventListener("load", function(){
        document.getElementById("CloseLink").onclick = function() { 
            console.log("Click alert");
        };
   });


    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">Ok, chiudi finestra</a></p>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);
}