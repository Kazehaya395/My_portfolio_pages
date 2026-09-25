(() => {
  const KEY = "vishal-portfolio-theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.dataset.theme = saved || (prefersDark ? "dark" : "light");

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem(KEY, theme);
    const dark = theme === "dark";
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
  };

  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  setTheme(root.dataset.theme);
})();
