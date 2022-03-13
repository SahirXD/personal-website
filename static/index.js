import {selectQuery,redirect} from "./JsModules/functions.js"

let navIcon = selectQuery('#menu-icon')
let navBar = selectQuery("#nav-bar")
//show nav bar
navIcon.onclick = function(){
	navBar.style.display = "block"
}
//hide nav bar 
let hideButton = selectQuery("#close-btn")
hideButton.onclick = function(){
	navBar.style.display = "none"
}
//redirection 
let home = selectQuery("#home")
let about = selectQuery("#about")
let contact = selectQuery("#contact")
let source = selectQuery("#source")
let social = selectQuery("#social")

home.onclick = function(){
	redirect("/")
}
about.onclick = function(){
	redirect("/about")
}
contact.onclick = function(){
	redirect("/contact")
}
source.onclick = function(){
	redirect("/source")
}
social.onclick = function(){
	redirect("/social")
}