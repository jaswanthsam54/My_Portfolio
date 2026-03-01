document.addEventListener("DOMContentLoaded", () => {

  

  // ================= THEME TOGGLE =================
  const themeBtn = document.getElementById("theme-btn");
  const icon = themeBtn.querySelector("i");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    icon.classList.replace(dark ? "fa-moon" : "fa-sun", dark ? "fa-sun" : "fa-moon");
    localStorage.setItem("theme", dark ? "dark" : "light");
  });

  // ================= SCROLL REVEAL =================
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // ================= FOOTER YEAR =================
  document.getElementById("year").textContent = new Date().getFullYear();

  // ================= CONTACT FORM =================
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    form.reset();
  });

  // ================= CUSTOM CURSOR =================
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
      cursorOutline.style.left = e.clientX + "px";
      cursorOutline.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .card, input, textarea, .square")
      .forEach(el => {
        el.addEventListener("mouseenter", () => {
          cursorOutline.classList.add("cursor-hover");
          cursorDot.style.transform = "translate(-50%, -50%) scale(0.6)";
        });
        el.addEventListener("mouseleave", () => {
          cursorOutline.classList.remove("cursor-hover");
          cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        });
      });
  }

});