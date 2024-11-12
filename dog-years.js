const Alienx = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

const secondsInEarthYear = 31_557_600 ;

function dogYears(planet, ageInSeconds) {
    let ageInEarthYears = ageInSeconds / secondsInEarthYear;
    let ageOnPlanet = ageInEarthYears / Alienx[planet.toLowerCase()];
    let ageInDogYears = ageOnPlanet * 7;
    return parseFloat(ageInDogYears.toFixed(2));
}
