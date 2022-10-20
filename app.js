let myListItems = document.getElementsByTagName("li");
let i;
for (i = 0; i < myListItems.length; i++){
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myListItems[i].appendChild(span)
}