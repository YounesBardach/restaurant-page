import '../css/menu.css';
import '../img/cheese.svg';
import '../img/lenga.svg';
import '../img/mix.svg';
import '../img/original.svg';
import '../img/pepperoni.svg';
import '../img/sfincione-palermitano.svg';
import '../img/wood-menu.jpg';

let menuLoad = () => {

    const content = document.getElementById("content");
    const menu = document.createElement("div");
    const menuOne = document.createElement("div");
    const menuTwo = document.createElement("div");
    const menuThree = document.createElement("div");
    const menuFour = document.createElement("div");
    const menuFive = document.createElement("div");
    const menuSix = document.createElement("div");
    const imgOne = new Image();
    const imgTwo = new Image();
    const imgThree = new Image();
    const imgFour = new Image();
    const imgFive = new Image();
    const button = document.createElement("button");
    const parOne = document.createElement("p");
    const parTwo = document.createElement("p");
    const parThree = document.createElement("p");
    const parFour = document.createElement("p");
    const parFive = document.createElement("p");
    const present = document.createElement("div");

    content.classList.add("menu-content")
    content.appendChild(menu).classList.add("menu")
    menu.appendChild(menuOne).classList.add("pizza-menu")
    menuOne.appendChild(imgOne).classList.add("pizza-img")
    imgOne.setAttribute("src", "./images/6af82e95c10ac19dfaa2.svg")
    imgOne.setAttribute("alt", "Pepperoni Pizza")
    menuOne.appendChild(parOne).classList.add("no-margin", "centered-w")
    parOne.innerHTML = `<span class="pizza-name">Saucisson </span>Pepperoni, onions, bell
    peppers & roasted garlic`
    menu.appendChild(menuTwo).classList.add("pizza-menu")
    menuTwo.appendChild(imgTwo).classList.add("pizza-img")
    imgTwo.setAttribute("src", "./images/478aa0d73281508ec278.svg")
    imgTwo.setAttribute("alt", "Pizza Alla Pala")
    menuTwo.appendChild(parTwo).classList.add("no-margin", "centered-w")
    parTwo.innerHTML = `<span class="pizza-name">Alla Pala </span>Sliced tomatoes, black
    olives, mozzarella, basil & oregano`
    menu.appendChild(menuThree).classList.add("pizza-menu")
    menuThree.appendChild(imgThree).classList.add("pizza-img")
    imgThree.setAttribute("src", "./images/636f447cd521bfaa8c40.svg")
    imgThree.setAttribute("alt", "Pizza Quattro Formaggi")
    menuThree.appendChild(parThree).classList.add("no-margin", "centered-w")
    parThree.innerHTML = `<span class="pizza-name">Quattro Formaggi </span>Mozzarella,
    taleggio, scamorza & gorgonzola cheese`
    menu.appendChild(menuFour).classList.add("pizza-menu")
    menuFour.appendChild(imgFour).classList.add("pizza-img")
    imgFour.setAttribute("src", "./images/1813818d02aa5d9fc8c5.svg")
    imgFour.setAttribute("alt", "Pizza Napoletana")
    menuFour.appendChild(parFour).classList.add("no-margin", "centered-w")
    parFour.innerHTML = `<span class="pizza-name">Napoletana </span>Mozzarella balls,
    parmesan, basil`
    menu.appendChild(menuFive).classList.add("pizza-menu")
    menuFive.appendChild(imgFive).classList.add("pizza-img")
    imgFive.setAttribute("src", "./images/1e1f80e04a2759226713.svg")
    imgFive.setAttribute("alt", "Pizza La Carne")
    menuFive.appendChild(parFive).classList.add("no-margin", "centered-w")
    parFive.innerHTML = `<span class="pizza-name">La Carne </span>Bacon, pepperoni, ham,
    shiitake, honey`
    menu.appendChild(menuSix).classList.add("pizza-menu")
    menuSix.appendChild(button).classList.add("orderes-bt", "white-hover")
    button.textContent = "View All"

    const firstHalf = document.createElement("div");
    const navbar = document.createElement("nav");
    const listOne = document.createElement("ul");
    const liOne = document.createElement("li");
    const linkTwo = document.createElement("a");
    const liTwo = document.createElement("li");
    const linkThree = document.createElement("a");
    const liThree = document.createElement("li");
    const linkFour = document.createElement("a");
    const listTwo = document.createElement("ul");
    const liFour = document.createElement("li");
    const linkFive = document.createElement("a");
    const svgOne = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathOne = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liFive = document.createElement("li");
    const linkSix = document.createElement("a");
    const svgTwo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathTwo = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liSix = document.createElement("li");
    const linkSeven = document.createElement("a");
    const svgThree = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathThree = document.createElementNS('http://www.w3.org/2000/svg',"path");

    content.appendChild(present).classList.add("present")
    present.appendChild(firstHalf).classList.add("first-half")
    firstHalf.appendChild(navbar).classList.add("navbar")
    navbar.appendChild(listOne).classList.add("flexbar-one", "no-margin", "no-pad")
    listOne.appendChild(liOne).classList.add("white-hover")
    liOne.appendChild(linkTwo).classList.add("no-style-link")
    linkTwo.setAttribute("href", "#!")
    linkTwo.textContent = "Home"
    listOne.appendChild(liTwo).classList.add("white-hover")
    liTwo.appendChild(linkThree).classList.add("no-style-link", "surligne")
    linkThree.setAttribute("href", "#!")
    linkThree.textContent = "Menu"
    listOne.appendChild(liThree).classList.add("white-hover")
    liThree.appendChild(linkFour).classList.add("no-style-link")
    linkFour.setAttribute("href", "#!")
    linkFour.textContent = "Contact"
    navbar.appendChild(listTwo).classList.add("flexbar-two", "no-margin", "no-pad")
    listTwo.appendChild(liFour).classList.add("white-hover")
    liFour.appendChild(linkFive).classList.add("no-style-link")
    linkFive.setAttribute("href", "#!")
    linkFive.appendChild(svgOne)
    svgOne.setAttribute("style", "width: 24px; height: 24px")
    svgOne.setAttribute("viewBox", "0 0 24 24")
    svgOne.appendChild(pathOne).setAttributeNS(null, "fill", "currentColor")
    svgOne.appendChild(pathOne).setAttributeNS(null, "d", "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z")
    listTwo.appendChild(liFive).classList.add("white-hover")
    liFive.appendChild(linkSix).classList.add("no-style-link")
    linkSix.setAttribute("href", "#!")
    linkSix.appendChild(svgTwo)
    svgTwo.setAttribute("style", "width: 24px; height: 24px")
    svgTwo.setAttribute("viewBox", "0 0 24 24")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "fill", "currentColor")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z")
    listTwo.appendChild(liSix).classList.add("white-hover")
    liSix.appendChild(linkSeven).classList.add("no-style-link")
    linkSeven.setAttribute("href", "#!")
    linkSeven.appendChild(svgThree)
    svgThree.setAttribute("style", "width: 24px; height: 24px")
    svgThree.setAttribute("viewBox", "0 0 24 24")
    svgThree.appendChild(pathThree).setAttributeNS(null, "fill", "currentColor")
    svgThree.appendChild(pathThree).setAttributeNS(null, "d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z")

    const star = document.createElement("div");
    const orange = document.createElement("div");
    const sfinc = document.createElement("div");
    const imgSix = new Image();
    const parSix = document.createElement("p");
    const div = document.createElement("div");
    const flexres = document.createElement("div");
    const res = document.createElement("div");
    const parSeven = document.createElement("p");
    const parEight = document.createElement("p");
    const parNine = document.createElement("p");
    const parTen = document.createElement("p");
    const parEleven = document.createElement("p");
    const buttonTwo = document.createElement("button");

    firstHalf.appendChild(star).classList.add("star-dish")
    star.appendChild(orange).classList.add("redorange-wr")
    orange.appendChild(sfinc).classList.add("sfincione")
    sfinc.appendChild(imgSix).classList.add("pizza-sfinc")
    imgSix.setAttribute("src", "./images/28e93770885fd67893c4.svg")
    imgSix.setAttribute("alt", "Pizza Sfincione Palermitano")
    sfinc.appendChild(parSix).classList.add("no-margin")
    parSix.innerHTML = `<span class="pizza-name-two">Sfincione Palermitano </span>Our
    original Sicilian pizza with onions, anchovies, tomatoes, herbs,
    caciocavallo & toma`
    star.appendChild(div).appendChild(flexres).classList.add("flex-reserv")
    flexres.appendChild(res).classList.add("reservation")
    res.appendChild(parSeven).classList.add("no-margin", "red-title")
    parSeven.textContent = "Reservation"
    res.appendChild(parEight).classList.add("no-margin")
    parEight.textContent = "Opening Times"
    res.appendChild(parNine).classList.add("no-margin", "underdash")
    parNine.textContent = "Week Days: 10:30 am - 9:00 pm"
    res.appendChild(parTen).classList.add("no-margin", "underdash")
    parTen.textContent = "Saturday-Sunday: 11:30 am - 10:30 pm"
    res.appendChild(parEleven).classList.add("no-margin", "underdash")
    parEleven.textContent = "Book your table for lunch or dinner"
    res.appendChild(buttonTwo).classList.add("orderes-bt", "align-bt", "white-hover")
    buttonTwo.textContent = "Book"
}

export default menuLoad
