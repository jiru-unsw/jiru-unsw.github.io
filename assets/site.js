(() => {
  const key = "jiru-site-theme";
  const button = document.querySelector(".theme-toggle");
  const label = document.querySelector(".theme-label");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(dark) {
    document.body.classList.toggle("dark", dark);
    button.setAttribute("aria-pressed", String(dark));
    label.textContent = dark ? "浅色" : "深色";
  }

  const saved = localStorage.getItem(key);
  applyTheme(saved === null ? systemDark : saved === "dark");
  button.addEventListener("click", () => {
    const dark = !document.body.classList.contains("dark");
    localStorage.setItem(key, dark ? "dark" : "light");
    applyTheme(dark);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
