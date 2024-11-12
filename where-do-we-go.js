import { places } from "./where-do-we-go.data.js";

var previousScrollY = window.scrollY;
const locationLink = document.createElement("a");
locationLink.classList.add("location");
document.body.appendChild(locationLink);

document.addEventListener("DOMContentLoaded", () => {
    selectPlace();
});

document.addEventListener("scroll", () => {
    selectPlace();
    previousScrollY > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    previousScrollY = window.scrollY;
});

function explore() {
    // Sort and display places
    places.sort(sortByLat);
    places.forEach((place) => {
        addSection(place);
    });
    // Compass display
    const compassDiv = document.createElement("div");
    compassDiv.classList.add("direction");
    document.body.appendChild(compassDiv);
}

function addSection(place) {
    let sectionElement = document.createElement("section");
    sectionElement.style.background = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`;
    sectionElement.style.backgroundSize = "cover";
    sectionElement.style.backgroundPosition = "center";
    sectionElement.style.backgroundRepeat = "no-repeat";
    sectionElement.style.width = "100%";
    sectionElement.style.height = "100vh";
    document.body.appendChild(sectionElement);
}

function selectPlace() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.scrollY + viewHeight / 2;
    const placeIndex = Math.floor(scrollPosition / viewHeight);
    const currentPlace = places[placeIndex];
    locationLink.textContent = `${currentPlace.name}\n${currentPlace.coordinates}`;
    locationLink.href = `https://www.google.com/maps/place/${encodeCoordinates(
        currentPlace.coordinates
    )}/`;
    console.log(
        locationLink.href
            .split("%C2%B0")
            .join("°")
            .split("%22")
            .join('"')
            .split("%20")
            .join(" ")
    );
    locationLink.target = "_blank";
    locationLink.style.color = currentPlace.color;
}

function encodeCoordinates(coords) {
    return coords
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");
}

function sortByLat(a, b) {
    const aDir = a.coordinates.split(" ")[0].split('"')[1];
    const bDir = b.coordinates.split(" ")[0].split('"')[1];
    const aLat = a.coordinates.split(" ")[0];
    const bLat = b.coordinates.split(" ")[0];
    let [aDeg, aMin, aSec] = parseLat(aLat);
    let [bDeg, bMin, bSec] = parseLat(bLat);
    
    if (aDir === "S") [aDeg, aMin, aSec] = [-aDeg, -aMin, -aSec];
    if (bDir === "S") [bDeg, bMin, bSec] = [-bDeg, -bMin, -bSec];

    if (aDeg !== bDeg) return aDeg > bDeg ? -1 : 1;
    if (aMin !== bMin) return aMin > bMin ? -1 : 1;
    return aSec - bSec;
}

function parseLat(latString) {
    const [deg, minSec] = latString.split("°");
    const [min, sec] = minSec.split("'")[0].split('"');
    return [parseInt(deg), parseInt(min), parseInt(sec)];
}

export { explore };
