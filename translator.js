import dictionary from './Dictionary.js';

// Перевірка підключення словника
document.addEventListener("DOMContentLoaded", function () {
  const statusIndicator = document.getElementById("dictionary-status");
  if (dictionary && Object.keys(dictionary).length > 0) {
    statusIndicator.textContent = "Словник підключено";
    statusIndicator.style.color = "green";
  } else {
    statusIndicator.textContent = "Словник не підключено";
    statusIndicator.style.color = "red";
  }
});

// Функція для перекладу
document.getElementById("translate").addEventListener("click", function () {
  const input = document.getElementById("input").value.trim(); // Отримання введеного тексту
  const output = document.getElementById("output"); // Поле для виводу результату
  const language = document.getElementById("language").value; // Вибір мови

  let translatedText = "Переклад не знайдено"; // Значення за замовчуванням

  if (language === "latin-to-ukrainian") {
    translatedText = dictionary["latin-to-ukrainian"][input] || translatedText;
  } else if (language === "ukrainian-to-latin") {
    translatedText = dictionary["ukrainian-to-latin"][input] || translatedText;
  }

  output.textContent = translatedText; // Виведення результату
});

// Автозаповнення для введення тексту
document.getElementById("input").addEventListener("input", function () {
  const input = this.value.trim();
  const language = document.getElementById("language").value;
  const suggestions = document.getElementById("suggestions");

  suggestions.innerHTML = ""; // Очищення попередніх підказок

  if (!input) return; // Якщо поле пусте, не показувати підказки

  const words = language === "latin-to-ukrainian"
    ? Object.keys(dictionary["latin-to-ukrainian"])
    : Object.keys(dictionary["ukrainian-to-latin"]);

  const filteredWords = words.filter(word => word.startsWith(input));

  filteredWords.forEach(word => {
    const option = document.createElement("div");
    option.textContent = word;
    option.className = "suggestion-item";
    option.addEventListener("click", function () {
      document.getElementById("input").value = word; // Вибір слова
      suggestions.innerHTML = ""; // Очищення підказок
    });
    suggestions.appendChild(option);
  });
});