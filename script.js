
//select popupbox,overlay,button
var popuoverlay = document.querySelector(".popup-overlay")
var popupbox= document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popuoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel btn
var cancelpopup=document.getElementById("cancal-popup")
cancelpopup.addEventListener("click",function(){
    event.preventDefault()
    popuoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container,add-book,booktittle,author,description
var container = document.querySelector(".container");


var addbook = document.getElementById("add-book"); // Corrected this line
var booktittle = document.getElementById("book-tittle-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktittle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
     <button onclick="deletebook(event)">Delete</button>`; // Changed to backticks
    container.append(div);
});
function deletebook(event){
    event.target.parentElement.remove()
}
