function countLeapYears(date) {
    var year = date.getFullYear();
    var leapYears = 0;

    for (var i = 0; i < year; i++) {
        if (isLeapYear(i)) {
            leapYears++;
        }
    }
    
    return leapYears -1;
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

console.log(countLeapYears(new Date('1664-08-09'))) 