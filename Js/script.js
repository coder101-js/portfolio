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

// Adding scrolling to pages
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("Explore").addEventListener("click", function () {
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll('a[href="#skills"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("Skills");
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

document.getElementById("Contact").addEventListener("click", function () {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll('a[href="#projects"]').forEach((link)=>{
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});