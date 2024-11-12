async function isWinner(country) {
    try {
        country = await db.getWinner(country);
        if (country === Error('Country Not Found')) {
            return `${country.name} never was a winner`;
        }
        if (country.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }
        let res = await db.getResults(country.id);
        if (res === Error('Results Not Found')) {
            return `${country.name} never was a winner`;
        }
        if (res.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }
        return (`${country.name} won the FIFA World Cup in ` + res.map((res) => res.year).join(', ') + ' winning by ' + res.map((res) => res.score).join(', '))
    } catch (e) {
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}