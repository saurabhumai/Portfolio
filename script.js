// script.js — minimal interactivity and validation

// set copyright years
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  ['year','year-2','year-3','year-4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // nav toggles (supports multiple pages with different toggle IDs)
  ['nav-toggle','nav-toggle-2','nav-toggle-3','nav-toggle-4'].forEach(tid => {
    const btn = document.getElementById(tid);
    if (!btn) return;
    btn.addEventListener('click', function () {
      // find related nav (convention: main-nav, main-nav-2, etc)
      const navId = tid.replace('nav-toggle', 'main-nav');
      const nav = document.getElementById(navId);
      if (!nav) return;
      nav.classList.toggle('open');
      // toggle aria expanded
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
    });
  });

  // simple contact form handling
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name.checkValidity()) {
        status.textContent = 'Please enter your name.';
        name.focus();
        return;
      }
      if (!email.checkValidity()) {
        status.textContent = 'Please provide a valid email address.';
        email.focus();
        return;
      }
      if (!message.checkValidity()) {
        status.textContent = 'Please enter a message (10+ characters).';
        message.focus();
        return;
      }

      // For a static site we show a success message and provide mailto fallback.
      status.textContent = 'Message ready. You can open your email client to send it.';
    });

    const mailtoBtn = document.getElementById('mailto-btn');
    if (mailtoBtn) {
      mailtoBtn.addEventListener('click', function () {
        const name = encodeURIComponent(document.getElementById('name').value || '');
        const email = encodeURIComponent(document.getElementById('email').value || '');
        const message = encodeURIComponent(document.getElementById('message').value || '');
        const subject = encodeURIComponent('Contact from portfolio site');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:{email}?subject=${subject}&body=${body}`;
      });
    }
  }
});
