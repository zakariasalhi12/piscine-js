function ionOut(inputStr) {
    const words = inputStr.split(/\s+/);
    const result = [];
    const pattern = /t(ion)/;

    words.forEach(word => {
        const cleanWord = word.replace(/[^\w]/g, '');
        const match = cleanWord.match(pattern);

        if (match) {
            const withoutIon = cleanWord.replace('ion', '');
            result.push(withoutIon);
        }
    });

    return result;
}

