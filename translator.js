document.getElementById("translate").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  // Простий приклад перекладу
  const dictionary = {
    "salve": "привіт",
    "vale": "прощавай",
    "amicus": "друг"
  };

  const translated = input.split(" ").map(word => dictionary[word] || word).join(" ");
  output.textContent = translated;
});