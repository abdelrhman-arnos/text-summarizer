function tokenizeWords(text){
    return text
        .toLowerCase()
        .replace(/[!.,;?]+/g, '')
        .split(/\s+/);
}

function buildWordFrequencyMap(words){
    const wordFrequencyMap = {};

    words.forEach(word => {
        if(!wordFrequencyMap[word]){
            wordFrequencyMap[word] = 1;
        } else {
            wordFrequencyMap[word]++;
        }
    });

    return wordFrequencyMap;
}

function simplifySentence(sentence, wordFrequencyMap){
    const words = tokenizeWords(sentence);
    const wordScores = words.map(word => wordFrequencyMap[word] || 0);
    const sentenceScore = wordScores.reduce((score, wordScore) => score + wordScore, 0);

    return { sentence, sentenceScore };
}

function summary(text, numSentences){
    const sentences = text.split(/[.!?]+/).map(sentence => sentence.trim());
    const words = tokenizeWords(text);
    const wordFrequencyMap = buildWordFrequencyMap(words);
    const sentenceScores = sentences.map(sentence => simplifySentence(sentence, wordFrequencyMap));
    const summarizedSentences = sentenceScores
        .sort((a, b) => b.sentenceScore - a.sentenceScore)
        .slice(0, numSentences)
        .map(result => result.sentence)
        .join('. ');

    return summarizedSentences;
}

document.getElementById("summarize-button").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value;
    const summarizedText = summary(inputText, 3); // Change 3 to any number of sentences you'd like in the summary
    document.getElementById("output-text").innerText = summarizedText;
});