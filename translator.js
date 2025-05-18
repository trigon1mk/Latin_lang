document.getElementById("translate").addEventListener("click", async function () {
  const input = document.getElementById("input").value; // Отримання введеного тексту
  const output = document.getElementById("output"); // Поле для виводу результату
  const language = document.getElementById("language").value; // Вибір мови

  // Визначення напрямку перекладу
  const [sourceLang, targetLang] = language === "latin-to-ukrainian"
    ? ["la", "uk"] // Латинська -> Українська
    : ["uk", "la"]; // Українська -> Латинська

  try {
    // Відправка запиту до LibreTranslate API
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: input, // Текст для перекладу
        source: sourceLang, // Початкова мова
        target: targetLang, // Мова перекладу
        format: "text" // Формат тексту
      })
    });

    if (!response.ok) {
      throw new Error("Не вдалося отримати переклад");
    }

    const data = await response.json();
    output.textContent = data.translatedText; // Виведення перекладеного тексту
  } catch (error) {
    output.textContent = `Помилка: ${error.message}`; // Виведення помилок
  }
});