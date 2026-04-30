 // Toggle mobile navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change icon
  if (navLinks.classList.contains("active")) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }
});