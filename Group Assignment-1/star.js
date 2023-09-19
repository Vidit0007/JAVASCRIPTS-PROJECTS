const content=document.getElementById("body1")
const home1 =document.getElementById("home")
const about1 =document.getElementById("about")
const contact1 =document.getElementById("contact")
const button =document.getElementById("register")
const photo=document.getElementByID("picture")
const checkBox=document.getElementByID("tick")

home.addEventListner("click",() => {
    alert("WELCOME AVENGERS! READY TO ASSEMBLE" )
 })
 contact.addEventListner("click",() => {
    alert("WELCOME AVENGERS! READY TO ASSEMBLE" )
 })
 about.addEventListner("click",() => {
    alert("WELCOME AVENGERS! READY TO ASSEMBLE" )
 })
 
 button.addEventListner("click",() => {
    content.style.backgroundImage="URL(avengers.jpg)";
 })
 checkBox.addEventListner("click",() => {
    photo.style.display="none";
 })
 checkBox.addEventListner("dblclick",() => {
    photo.style.display="";
 })
