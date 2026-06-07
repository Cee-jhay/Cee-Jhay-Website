/**
 * Charles Akpan — Premium Web3 Portfolio
 * Navbar scroll state · smooth scroll · mobile nav · reveal · form · active links
 */

(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var navMenu = document.getElementById("nav-menu");
  var navToggle = document.querySelector(".nav-toggle");
  var scrollLinks = document.querySelectorAll("[data-scroll]");
  var revealElements = document.querySelectorAll(".reveal");
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  var sectionOrder = ["hero", "about", "skills", "projects", "contact"];

  function getNavHeight() {
    return header ? header.offsetHeight : 76;
  }

  /**
   * Map section id to nav hash (Skills shares About in navbar)
   */
  function navHashForSection(sectionId) {
    if (sectionId === "skills") return "about";
    return sectionId;
  }

  /**
   * Smooth scroll to anchor; offset for fixed header
   */
  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    var target = document.querySelector(hash);
    if (!target) return;

    var top =
      target.getBoundingClientRect().top +
      window.scrollY -
      getNavHeight() -
      8;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  function toggleMenu() {
    if (!navMenu || !navToggle) return;
    var open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  /* --- Navbar: transparent → solid --- */
  function updateHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  /* --- Active nav link --- */
  function updateActiveNav() {
    var navHeight = getNavHeight();
    var y = window.scrollY + navHeight + 100;
    var currentSection = "hero";

    for (var i = 0; i < sectionOrder.length; i++) {
      var id = sectionOrder[i];
      var el = document.getElementById(id);
      if (el && el.offsetTop <= y) {
        currentSection = id;
      }
    }

    var activeHash = "#" + navHashForSection(currentSection);
    var links = document.querySelectorAll(".nav-menu a[href^='#']");

    links.forEach(function (a) {
      if (a.getAttribute("href") === activeHash) {
        a.classList.add("is-active");
      } else {
        a.classList.remove("is-active");
      }
    });
  }

  function onScroll() {
    updateHeaderScroll();
    updateActiveNav();
  }

  /* --- Smooth scroll for in-page links --- */
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      e.preventDefault();
      scrollToHash(href);
      closeMenu();
    });
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeMenu();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  updateHeaderScroll();
  updateActiveNav();

  if (window.location.hash) {
    window.addEventListener("load", function () {
      scrollToHash(window.location.hash);
    });
  }

  /* --- Scroll reveal --- */
  if ("IntersectionObserver" in window && revealElements.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08,
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* --- Contact form (front-end only; wire to backend or Formspree later) --- */
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("contact-name");
      var email = document.getElementById("contact-email");
      var message = document.getElementById("contact-message");

      var nameVal = name && name.value.trim();
      var emailVal = email && email.value.trim();
      var messageVal = message && message.value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        formStatus.textContent = "Please fill in name, email, and message.";
        formStatus.style.color = "#fbbf24";
        return;
      }

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!emailOk) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "#fbbf24";
        return;
      }

      formStatus.style.color = "";
      formStatus.textContent =
        "Thanks — your message is ready to send. Connect a form backend (e.g. Formspree, Resend) or use mailto for production.";

      contactForm.reset();
    });
  }
})();
