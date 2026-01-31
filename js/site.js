function loadContent(fileName,contentChanged) {
  fetch(fileName)
    .then(response => {
      if (!response.ok) throw new Error('File not found');
      return response.text();
    })
    .then(data => {
      const container = document.getElementById(contentChanged);
      container.innerHTML = data;

      // 🔥 translate newly injected content
      if (typeof applyTranslations === "function") {
        applyTranslations(container);
      }
    })
    .catch(error => {
      document.getElementById(contentChanged).innerHTML =
        "<h2>Error</h2><p>Could not load the file.</p>";
    });
}

const langBtn = document.getElementById("lang-switch");

langBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    loadLanguage(newLang);

    // Optional: update button text to show next language
    langBtn.textContent = newLang === "en" ? "🌐 EN/FR" : "🌐 FR/EN";
});

