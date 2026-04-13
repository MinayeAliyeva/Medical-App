import $ from "jquery";
import Collapse from "bootstrap/js/dist/collapse";
import Toast from "bootstrap/js/dist/toast";
import Odometer from "odometer";
import { WOW } from "wowjs";
import { siteData } from "../data/siteData";

let scrollListenerBound = false;

const hideLoader = () => {
  const loader = document.getElementById("loadingOverlay");

  if (!loader) {
    return;
  }

  loader.classList.add("fade-out");
  document.body.classList.add("loaded");
};

const initLoader = () => {
  const loader = document.getElementById("loadingOverlay");

  if (!loader || loader.dataset.initialized === "true") {
    return;
  }

  loader.dataset.initialized = "true";

  window.setTimeout(hideLoader, 2500);
  window.addEventListener(
    "load",
    () => {
      window.setTimeout(hideLoader, 800);
    },
    { once: true }
  );

  loader.addEventListener("click", hideLoader);
};

const handleScroll = () => {
  const navbar = document.querySelector(".navbar-custom");
  const backToTop = document.getElementById("backToTop");

  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }

  if (backToTop) {
    backToTop.classList.toggle("show", window.scrollY > 500);
  }
};

const initScrollEffects = () => {
  if (!scrollListenerBound) {
    window.addEventListener("scroll", handleScroll);
    scrollListenerBound = true;
  }

  handleScroll();
};

const initBackToTop = () => {
  const backToTop = document.getElementById("backToTop");

  if (!backToTop) {
    return;
  }

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const initSliders = () => {
  $(".testimonial-slider").each((_, element) => {
    const slider = $(element);

    if (slider.hasClass("slick-initialized")) {
      return;
    }

    slider.slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
};

const initOdometers = () => {
  const items = [...document.querySelectorAll(".odometer")].map((element) => ({
    element,
    instance: new Odometer({
      el: element,
      value: 0,
      format: "(,ddd)",
      theme: "default"
    })
  }));

  const statsSection = document.querySelector(".stats-section");

  if (!statsSection || !items.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        items.forEach(({ element, instance }) => {
          instance.update(Number(element.dataset.count));
        });

        observer.disconnect();
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);
};

const initForm = () => {
  const form = document.getElementById("appointmentForm");
  const toastElement = document.getElementById("formToast");

  if (!form || !toastElement) {
    return;
  }

  const toast = new Toast(toastElement);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const body = [
      `Ad Soyad: ${entries.fullName || ""}`,
      `Telefon: ${entries.phone || ""}`,
      `E-poçt: ${entries.email || ""}`,
      `Doğum tarixi: ${entries.birthDate || ""}`,
      `Klinika: ${entries.clinic || ""}`,
      `Tarix: ${entries.preferredDate || ""}`,
      `Şikayət / Diaqnoz: ${entries.complaint || ""}`
    ].join("\n");

    window.location.href = `mailto:${siteData.contact.mainClinic.email}?subject=${encodeURIComponent("Randevu Sorğusu")}&body=${encodeURIComponent(body)}`;
    toast.show();
    form.reset();
  });
};

const initNavCollapse = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const navCollapse = document.getElementById("primaryNav");

  if (!navCollapse || !navLinks.length) {
    return;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!navCollapse.classList.contains("show")) {
        return;
      }

      Collapse.getOrCreateInstance(navCollapse).hide();
    });
  });
};

const initAnimations = () => {
  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 100,
    mobile: true,
    live: false
  }).init();
};

export const initInteractions = () => {
  initLoader();
  initScrollEffects();
  initBackToTop();
  initSliders();
  initOdometers();
  initForm();
  initNavCollapse();
  initAnimations();
};
