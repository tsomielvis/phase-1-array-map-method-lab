function titleCased() {
  // Sample array of tutorial names
  const tutorialNames = [
    "what Does The This Keyword Mean?",
    "What Is The Constructor OO Pattern?",
    "Implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What Is NaN And How Can We Check For It",
    "What Is The Difference Between StopPropagation And PreventDefault?",
    "Immutable State And Pure Functions",
    "What Is The Difference Between == And ===?",
    "What Is The Difference Between Event Capturing And Bubbling?",
    "What Is JSONP?",
  ];

  // Check if input is an array
  if (!Array.isArray(tutorialNames)) {
    return [];
  }
  // Map each string to title case using titleCase helper function
  return tutorialNames.map(titleCase);
}

// Helper function to convert a single string to title case
function titleCase(string) {
  // Convert string to lowercase, split by space, capitalize each word, and join back with space
  return string.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

module.exports = {
  titleCased: titleCased // Export the titleCased function
};
