function sameAmount(str, regex1, regex2) {
    const matches1 = str.match(new RegExp(regex1, 'g')) || [];
    const matches2 = str.match(new RegExp(regex2, 'g')) || [];
    return matches1.length === matches2.length;
}