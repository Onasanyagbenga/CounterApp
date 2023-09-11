let count = 0 ;
let countEl = document.getElementById("count-el") ;
let saveEl = document.getElementById("save-el") ;
// let saveBtn = document.getElementById("save-btn") ;
//Creates an increment function when the add button is clicked.
function increment(){
    count += 1 ;
    document.getElementById("count-el").innerHTML = count ;
}

//Creates a decrement function when the remove button is clicked.

function decrement(){
    count -= 1;
    document.getElementById("count-el").innerHTML = count ;
}

//Creates a Save function when the Save button is clicked.

function save(){
    let countStr = count + " - " ;
    document.getElementById("save-el").innerHTML += countStr ;
    // saveBtn.innerHTML = count ;
    document.getElementById("count-el").innerHTML = 0 ;
    count = 0 ;
}

//Clears all saved entries in the counter when the clear button is clicked.

function erase(){
    // let count = 0 ;
    // let clearStr = count
    document.getElementById("save-el").innerHTML = "SAVED ENTRY : " ;
    alert("Entry Cleared") //displays an alert message " entry cleared" when the clear button is clicked
}