// SVG definieren en appenden
let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
svg1.setAttribute("Class", "svg");
svg1.setAttribute("viewBox", "0 0 720 360");
svg1.setAttribute("width", "720");
svg1.setAttribute("height", "360");
let body = document.querySelector("body");
body.appendChild(svg1);

// nieuwe arrays voor X en Y posities berekent vanuit formules en longitude/latitude uit de objecten
let longitude = [];
let latitude = [];

for (let i = 0; i < cities.length; i++) {
    let positionX = (~~cities[i]["longitude"] + 180) * 2;
    let positionY = (90 - ~~cities[i]["latitude"]) * 2;
    longitude.push(positionX);
    latitude.push(positionY);
}
// Nu heb ik twee arrays van x en y positie

//Functie om de bolletjes te maken
function functieRondjes(x, y, r, vorm) {
    let rondje = document.createElementNS("http://www.w3.org/2000/svg", vorm);
    rondje.setAttribute("cx", x);
    rondje.setAttribute("cy", y);
    rondje.setAttribute("r", r);
    return rondje;
}

// loopje voor het uitvoeren van de functie
for (let i = 0; i < longitude.length; i++) {
    svg1.appendChild(functieRondjes(longitude[i], latitude[i], 2, "circle"));
}