function longWords(arr=[]) {
    return arr.every((element) => typeof element === "string" && element.length >=5)
}
function oneLongWord(arr=[]) {
    return arr.some((element) => typeof element === "string" && element.length >= 10)

}
function noLongWords(arr=[]) {
    return arr.every((element) => typeof element !== "string" || element.length < 7 )
}
