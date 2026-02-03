document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const closeNav = document.getElementById("closeNav");
  const navLinks = document.getElementById("navLinks");
  const navBackdrop = document.getElementById("navBackdrop");

  // Open menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
    navBackdrop.classList.add("active");
  });

  // Close menu (X button)
  closeNav.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navBackdrop.classList.remove("active");
  });

  // Close menu when clicking backdrop
  navBackdrop.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navBackdrop.classList.remove("active");
  });
});
