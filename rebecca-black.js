function isFriday(date) {
    return date.getDay() === 5; // 5 represents Friday
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 represents Sunday, 6 represents Saturday
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return date.getDate() === lastDay;
}
