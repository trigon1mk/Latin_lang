import dictionary from './Dictionary.js';

document.addEventListener("DOMContentLoaded", function () {
  const statusIndicator = document.getElementById("dictionary-status");
  const latinWords = Object.keys(dictionary["latin-to-ukrainian"]).length;
  const ukrainianWords = Object.keys(dictionary["ukrainian-to-latin"]).length;

  if (dictionary && latinWords > 0 && ukrainianWords > 0) {
    statusIndicator.textContent = `Словник підключено. Латинських слів: ${latinWords}, Українських слів: ${ukrainianWords}`;
    statusIndicator.style.color = "green";
  } else {
    statusIndicator.textContent = "Словник не підключено";
    statusIndicator.style.color = "red";
  }
});

// Переклад тексту
document.getElementById("translate").addEventListener("click", function () {
  const input = document.getElementById("input").value.trim().toLowerCase();
  const output = document.getElementById("output");
  const language = document.getElementById("language").value;

  let translatedText = "Переклад не знайдено";

  if (input.includes(" ")) {
    // Переклад речення
    const words = input.split(" ");
    translatedText = words
      .map((word) => dictionary[language][word] || word)
      .join(" ");
  } else {
    // Переклад одного слова
    translatedText = dictionary[language][input] || translatedText;
  }

  output.textContent = translatedText;
});