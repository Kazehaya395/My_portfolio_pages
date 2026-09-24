(() => {
  const key = "vishal-portfolio-theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(key);
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.dataset.theme = saved || preferred;

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  const update = () => {
    const dark = root.dataset.theme === "dark";
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.title = dark ? "Switch to light mode" : "Switch to dark mode";
  };

  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(key, root.dataset.theme);
    update();
  });

  update();
})();
