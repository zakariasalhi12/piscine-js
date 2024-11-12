function matchCron(cron, date) {
    var parts = cron.split(' ');
    var cronMin = parts[0];
    var cronHour = parts[1];
    var cronDay = parts[2];
    var cronMonth = parts[3];
    var cronDayOfWeek = parts[4];

    var minute = date.getMinutes();
    var hour = date.getHours();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
        dayOfWeek = 7; 
    }

    function matches(cronPart, datePart) {
        if (cronPart === '*') {
            return true;
        }
        return +cronPart === datePart;
    }

    return (
        matches(cronMin, minute) &&
        matches(cronHour, hour) &&
        matches(cronDay, day) &&
        matches(cronMonth, month) &&
        matches(cronDayOfWeek, dayOfWeek)
    );
}