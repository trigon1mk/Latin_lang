document.getElementById("translate").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const language = document.getElementById("language").value;

  // Словник для перекладу
  const dictionary = {
    "latin-to-ukrainian": {
      "salve": "привіт",
      "vale": "прощавай",
      "amicus": "друг"
    },
    "ukrainian-to-latin": {
      "привіт": "salve",
      "прощавай": "vale",
      "друг": "amicus"
    }
  };

  // Логіка перекладу
  const translated = input.split(" ")
    .map(word => dictionary[language][word] || word)
    .join(" ");
  output.textContent = translated;
});