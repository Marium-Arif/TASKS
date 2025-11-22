document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav_Links = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    nav_Links.classList.toggle("show");
  });
});

const form = document.querySelector('form');
if (form) {
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const message = inputs[2].value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const result = document.getElementById("result");
      result.textContent = "Sending...";

      if (response.ok) {
        result.textContent = "Message sent successfully!";
        form.reset();
      } else {
        result.textContent = "Failed to send message. Please try again later.";
      }
      }
      catch (error) {
        result.textContent = "An error occurred. Please try again later.";
      }
  });
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 150) {
      current = sec.getAttribute("class");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});

const ctaBtn = document.querySelector(".cta-btn");
const modal = document.getElementById("cta-modal");
const closeModal = document.getElementById("close-modal");

if (ctaBtn) {
  ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

if (window.location.pathname === "/services") {
  fetch("/api/services")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("services-container");
      container.innerHTML = data
        .map(s => `
          <div class="card">
            <h3>${s.title}</h3>
            <p>${s.description}</p>
          </div>
        `)
        .join("");
    });
}


