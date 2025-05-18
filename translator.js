import dictionary from './Dictionary.js';

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