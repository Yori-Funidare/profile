function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode", document.body.classList.contains("dark") ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
  }
});
