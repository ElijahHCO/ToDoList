let myListItems = document.getElementsByTagName("li");
let i;
for (i = 0; i < myListItems.length; i++){
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myListItems[i].appendChild(span)
}

let close = document.getElementsByClassName("close");
for (i =0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById("myInput").value
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("You must write something!")
    } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text)
    li.appendChild(span);

    for (i =0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}