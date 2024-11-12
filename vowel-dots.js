const vowels = /(a|e|i|o|u)/gi 
function vowelDots(str) {
    return str.replace(vowels, "$1.");
}