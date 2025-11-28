// script.js - minimal interactions for portfolio
document.addEventListener("DOMContentLoaded", function () {
  // mobile menu toggle
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const shown = navLinks.getAttribute("data-visible") === "true";
      navLinks.style.display = shown ? "" : "flex";
      navLinks.setAttribute("data-visible", shown ? "false" : "true");
    });
  }

  // basic contact form feedback (client-side only)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const btn = contactForm.querySelector("button[type='submit']");
      btn.disabled = true;
      btn.innerText = "Sending...";
      // allow normal submit to Formspree (or other) — this is just micro-feedback
      setTimeout(() => {
        btn.innerText = "Send message";
        btn.disabled = false;
      }, 3500);
    });
  }
});