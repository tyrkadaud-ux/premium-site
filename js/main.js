(function () {
  "use strict";

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* News */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function renderNews(items) {
    var list = document.getElementById("news-list");
    if (!list) return;
    list.innerHTML = "";
    (items || []).forEach(function (n) {
      var el = document.createElement("article");
      el.className = "news-item";
      el.innerHTML =
        '<div class="news-date">' + esc(n.date) + '</div>' +
        '<div>' +
          (n.tag ? '<span class="news-tag">' + esc(n.tag) + '</span>' : '') +
          '<h3 class="news-title">' + esc(n.title) + '</h3>' +
          '<p class="news-text">' + esc(n.text) + '</p>' +
        '</div>';
      list.appendChild(el);
    });
  }

  fetch("content/news.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then(function (data) { renderNews(data.items || data || []); })
    .catch(function () { renderNews(window.__FALLBACK_NEWS__ || []); });
})();