function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = str.toLowerCase().split(/\s+/);
    const result = {};

    words.forEach((word, index) => {
        const cleanWord = word.replace(/[^a-z]/g, '');
        if (pronouns.includes(cleanWord)) {
            if (!result[cleanWord]) {
                result[cleanWord] = { word: [], count: 0 };
            }
            result[cleanWord].count++;
            const nextWord = words[index + 1];
            if (nextWord) {
                const cleanNextWord = nextWord.replace(/[^a-z]/g, '');
                if (cleanNextWord && !pronouns.includes(cleanNextWord) && !result[cleanWord].word.includes(cleanNextWord)) {
                    result[cleanWord].word.push(cleanNextWord);
                }
            }
        }
    });

    return result;
}