function dayOfTheYear(date) {
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if (isLeapYear(year)) {
        daysInMonth[1] = 29
    }

    var dayOfYear = day
    for (var i = 0; i < month; i++) {
        dayOfYear += daysInMonth[i]
    }

    return dayOfYear;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}