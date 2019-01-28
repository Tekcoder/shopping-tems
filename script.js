//Declaring variables to access the DOM
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

//Declaring a function for the length of the input value
function inputLength() {
    return input.value.length;
}

//A function for creating an element an appending values to it
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick (){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(e){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterKeypress)