const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
});


window.onload = function () {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  if (isDarkMode) {
    body.classList.add("dark-mode");
  }
};

