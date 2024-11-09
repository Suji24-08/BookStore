var bookname = document.getElementById("title")
var bookauth = document.getElementById("author")
var bookdesc = document.getElementById("desc")
var popupbtn = document.getElementById("popup")
var overlay = document.getElementById("overlay")
var plusbtn = document.getElementById("plus")
var cancelbtn = document.getElementById("cancelbtn")
var addbtn = document.getElementById("addbtn")
var bookcontainer = document.querySelector(".container")

plusbtn.addEventListener("click",function(){
    popupbtn.style.display="block"
    overlay.style.display="block"
})
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupbtn.style.display="none"
    overlay.style.display="none"
})
addbtn.addEventListener("click",function(event){
    event.preventDefault()
})
addbtn.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","book-palet")
    div.innerHTML = `<h3>${bookname.value}</h3><h3>${bookauth.value}</h3><p>${bookdesc.value}</p><button onclick="del(event)">Delete</button>`
    bookcontainer.append(div)
    popupbtn.style.display="none"
    overlay.style.display="none"
})
function del(event){
    event.target.parentElement.remove()
}