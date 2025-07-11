// Responsive navbar
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
menuIcon.onclick = function () {
  navLinks.classList.toggle("active");
};
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      navLinks.classList.remove("active");
    }
  });
});

//Adding Darkmode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Making Local Sttorage
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

//Making Scrolling Event
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("Explore-Btn").addEventListener("click", function () {
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll('a[href="#skills"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("skills");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll('a[href="#projects"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll('a[href="#certificates"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("certificates");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("Contact-Btn").addEventListener("click", function () {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});