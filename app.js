(function () {
  const cfg = window.JS_CONFIG || {};
  const header = document.querySelector("[data-header]");
  const menuBtn = document.querySelector("[data-menu]");
  const nav = document.querySelector("[data-nav]");

  if (header) {
    const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const phone = (cfg.phone || "").trim();
  const email = (cfg.email || "").trim();
  const whatsapp = (cfg.whatsapp || "").trim();

  document.querySelectorAll("[data-phone]").forEach((el) => {
    if (!phone) {
      el.classList.add("hidden");
      return;
    }
    if (el.tagName === "A") el.href = "tel:" + phone.replace(/\s/g, "");
    el.textContent = phone;
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    if (!email) {
      el.classList.add("hidden");
      return;
    }
    if (el.tagName === "A") el.href = "mailto:" + email;
    el.textContent = email;
  });
  document.querySelectorAll("[data-need-phone]").forEach((el) => {
    if (!phone) el.classList.add("hidden");
  });

  const p = cfg.prices || {};
  const money = (n) => (typeof n === "number" ? "£" + n : "");
  const bind = {
    "price-manual": money(p.manualHour),
    "price-auto": money(p.autoHour),
    "price-block-manual": money(p.block10Manual),
    "price-block-auto": money(p.block10Auto),
    "price-assess": money(p.assessment)
  };
  Object.entries(bind).forEach(([key, val]) => {
    if (!val) return;
    document.querySelectorAll('[data-bind="' + key + '"]').forEach((el) => {
      el.textContent = val;
    });
  });

  const townList = document.querySelector("[data-towns]");
  if (townList && Array.isArray(cfg.areas)) {
    townList.innerHTML = cfg.areas.map((t) => "<span>" + t + "</span>").join("");
  }

  const form = document.querySelector("[data-book-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const lines = [
        "New lesson request — JS Driving School",
        "",
        "Name: " + (data.name || ""),
        "Phone: " + (data.phone || ""),
        "Postcode: " + (data.postcode || ""),
        "Transmission: " + (data.transmission || ""),
        "Experience: " + (data.experience || ""),
        "Preferred times: " + (data.times || ""),
        "",
        (data.notes || "")
      ].join("\n");

      const subject = encodeURIComponent("Lesson request from " + (data.name || "website"));
      const body = encodeURIComponent(lines);

      if (whatsapp) {
        const num = whatsapp.replace(/[^\d]/g, "");
        window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(lines), "_blank");
      } else if (email) {
        window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
      } else if (phone) {
        window.location.href = "tel:" + phone.replace(/\s/g, "");
      } else {
        navigator.clipboard.writeText(lines).catch(() => {});
      }

      const ok = form.querySelector(".success");
      if (ok) {
        ok.classList.add("show");
        ok.focus();
      }
      form.reset();
    });
  }
})();
