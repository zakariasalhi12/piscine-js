function citiesOnly(arr){
    return arr.map((obj) => obj["city"])
}
function upperCasingStates(arr) {
    return arr.map(function(str) {
        return str.replace(/\b\w/g, function(match) {
            return match.toUpperCase()
        })
    })
}
function fahrenheitToCelsius(arr) {
    return arr.map(function(str) {
        var fahrenheit = parseFloat(str.replace("°F", ""))
        var celsius = Math.floor((fahrenheit - 32 )* 5 / 9)
        return celsius + "°C"
    })
}

function trimTemp(arr) {
    return arr.map(function(obj) {
        var newObj = { 
            ...obj, 
            temperature: obj.temperature.replace(/\s+/g, "").trim()
        };
        return newObj;
    });
}




function tempForecasts(arr) {
    return arr.map(function(element) {
        let trimmed = trimTemp([element])[0]
        let celsiusTemp = fahrenheitToCelsius([trimmed.temperature])[0].replace("°C" , "°Celsius")
        let city = citiesOnly([element])[0]
        let state = upperCasingStates([element.state])[0]
        return `${celsiusTemp} in ${city}, ${state}`
    });
}


console.log(
    tempForecasts([
        {
          city: 'Pasadena',
          temperature: ' 101 °F',
          state: 'california',
          region: 'West',
        },
      ]) 
);// -> ['38°Celsius in Pasadena, California']