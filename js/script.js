document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".has-dropdown > .nav-dropdown-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (window.matchMedia("(max-width: 720px)").matches) {
        e.preventDefault();
        trigger.parentElement.classList.toggle("is-open");
      }
    });
  });

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    if (link.dataset.page === path) {
      link.classList.add("active");
    }
  });

  if (window.location.pathname.includes("/work/")) {
    const workTrigger = document.querySelector(".has-dropdown .nav-dropdown-trigger");
    if (workTrigger) workTrigger.classList.add("active");
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
