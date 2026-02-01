function loadContent(fileName,contentChanged) {
  fetch(fileName)
    .then(response => {
      if (!response.ok) throw new Error('File not found');
      return response.text();
    })
    .then(data => {
      const container = document.getElementById(contentChanged);
      container.innerHTML = data;

      container.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");
        for (const attr of oldScript.attributes) {
          newScript.setAttribute(attr.name, attr.value);
        }
        newScript.text = oldScript.textContent;
        document.body.appendChild(newScript);
        oldScript.remove();
      });

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

if (langBtn) {
  langBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    loadLanguage(newLang);

    langBtn.textContent = newLang === "en" ? "???? EN/FR" : "???? FR/EN";
  });
}
