document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // --- Scroll Reveal Animations ---
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px", // Triggers slightly before element enters viewport
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animates once per page load
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll(".scroll-reveal");
  elementsToReveal.forEach((el) => revealObserver.observe(el));
});