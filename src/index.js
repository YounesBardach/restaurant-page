import './css/normalize.css';
import homeLoad from "./pages/home"
import menuLoad from "./pages/menu"
import contactLoad from "./pages/contact"
homeLoad()
let home = document.querySelector(".flexbar-one").children[0]
let menu = document.querySelector(".flexbar-one").children[1]
let contact = document.querySelector(".flexbar-one").children[2]
let content = document.getElementById("content")
let homeTab = () => {
    content.innerHTML = ""
    homeLoad()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
let menuTab = () => {
    content.innerHTML = ""
    menuLoad()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
let contactTab = () => {
    content.innerHTML = ""
    contactLoad()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
home.addEventListener("click", homeTab)
menu.addEventListener("click", menuTab)
contact.addEventListener("click", contactTab)

