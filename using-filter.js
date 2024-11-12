function filterShortStateName(arr) {
    // Filter states with less than 7 characters
    return arr.filter(function(element) {
        return element.length < 7;
    });
}

function filterStartVowel(arr) {
    // Check if the state starts with a vowel
    return arr.filter(function(element) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < vowels.length; i++) {
            if (element[0].toLowerCase() === vowels[i]) {
                return true; // Found a vowel at the start
            }
        }
        return false; // No vowel at the start
    });
}

function filter5Vowels(arr) {
    // Filter states with at least 5 vowels
    return arr.filter(function(element) {
        let counter = 0;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (element[i].toLowerCase() === vowels[j]) {
                    counter++;
                    if (counter >= 5) {
                        return true; // At least 5 vowels found
                    }
                }
            }
        }
        return false; // Less than 5 vowels
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter(function(element) {
        let foundVowels = new Set();
        for (let char of element.toLowerCase()) {
            if ('aeiou'.includes(char)) {
                foundVowels.add(char); // Add the vowel to the set
            }
        }
        return foundVowels.size === 1; // Only one distinct vowel
    });
}

function multiFilter(arr) {
    return arr.filter(function(element) {
        let hasMinCapitalLength = element.capital.length >= 8;
        let nameDoesNotStartWithVowel = !'aeiou'.includes(element.name[0].toLowerCase());
        let hasVowelInTag = /[aeiou]/i.test(element.tag);
        let isNotInSouth = element.region !== "South";

        return hasMinCapitalLength && nameDoesNotStartWithVowel && hasVowelInTag && isNotInSouth;
    });
}
