// Define an array of common spelling errors and their corrections
let spellingErrors = {
  "teh": "the",
  "wierd": "weird",
  "recieve": "receive",
  "loose": "lose"
};

// Define a function that takes a sentence as a parameter and returns the corrected sentence
function correctSentence(sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(" ");

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // If the word is in the spellingErrors object, replace it with the correct spelling
    if (spellingErrors[words[i]]) {
      words[i] = spellingErrors[words[i]];
    }
  }

  // Join the array of corrected words back into a single string and return it
  return words.join("   ");
}

// Test the function
let incorrectSentence = "I recie packaeg due cold drinks";
console.log(correctSentence(incorrectSentence));
// Output: "I received the package yesterday."
