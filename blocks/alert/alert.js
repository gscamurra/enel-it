export default function decorate(block) {
    
    const alertMessage = block.textContent.trim();
    const divAlert = document.createElement("div");
    
    divAlert.innerHTML = "<p>" + alertMessage + "<a id=\"CloseLink\">Ok, chiudi finestra</a></p>";     
    block.replaceWith(divAlert);
    
    console.log("Alert message: " + divAlert);
}



document.getElementById("CloseLink").onclick = displayDate;
function displayDate() {
  document.getElementById("CloseLink").innerHTML = Date();
}