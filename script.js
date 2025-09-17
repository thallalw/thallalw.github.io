// Cek tema dari localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Fungsi toggle tema
function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}