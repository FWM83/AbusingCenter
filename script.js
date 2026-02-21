// Button ripple (tech-style interaction)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement("span");
    ripple.className = "btn-ripple";
    ripple.style.cssText = `left:${x}px;top:${y}px;`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// Smooth scroll for buttons with data-scroll
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const trigger = item.querySelector(".faq-question");
  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      openItem.classList.remove("open");
    });
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

// Pricing toggle (visual only)
const pricingToggleLabels = document.querySelectorAll(
  ".pricing-toggle .toggle-label"
);
const pricingCards = document.querySelectorAll("[data-plan-card]");

pricingToggleLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const plan = label.getAttribute("data-plan");

    pricingToggleLabels.forEach((l) => l.classList.remove("active"));
    label.classList.add("active");

    pricingCards.forEach((card) => {
      card.style.opacity = card.getAttribute("data-plan-card") === plan ? "1" : "0.5";
      card.style.transform =
        card.getAttribute("data-plan-card") === plan ? "translateY(-3px)" : "translateY(0)";
    });
  });
});

