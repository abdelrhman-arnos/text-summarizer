# Text Summarizer

This repository contains a minimalistic JavaScript-based web application that automatically generates a summary of a given text. The application uses a simplified version of the TextRank algorithm for sentence extraction based on word frequency and co-occurrence.

## Features
- Summarizes input text by extracting and ranking sentences.
- Scores sentences based on the frequency of the words they contain.
- User can choose the number of sentences for the output summary.

## Usage
1. Clone this repository on your local machine.
2. Open the `index.html` file in your preferred web browser.
3. Enter your text into the textarea and click the "Summarize Text" button.
4. The generated summary will be displayed below the textarea.

## Implementation
This application uses vanilla HTML, CSS, and JavaScript for the frontend and includes a simple implementation of the TextRank algorithm in JavaScript. The application has the following functions:

- `tokenizeWords(text)`: Tokenizes a given text into words while converting to lowercase and removing punctuation.
- `buildWordFrequencyMap(words)`: Builds a frequency map (dictionary) of words in the given list.
- `simplifySentence(sentence, wordFrequencyMap)`: Scores a given sentence based on the frequency of the words it contains, according to the provided frequency map.
- `summary(text, numSentences)`: Takes the input text and desired number of sentences for the output summary, applies the simplified TextRank algorithm to extract and rank sentences, and returns the generated summary.

## Limitations
- This implementation only considers word frequency and co-occurrence to score sentences. More advanced solutions might utilize natural language processing libraries or APIs for more accurate summarization.

## Possible Improvements
- Integrating more advanced NLP techniques, such as dependency parsing, part-of-speech tagging, or Named Entity Recognition.
- Implementing a graphical user interface to better format the input and output text.
- Allowing users to adjust algorithm parameters for customized summarization.
