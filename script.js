// Small, polite JS: current year + smooth anchor scrolling.
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Smooth scrolling for in-page anchors (with sticky header offset).
  const header = document.querySelector(".topbar");
  const headerH = header ? header.getBoundingClientRect().height : 0;

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();

      const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 10);
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });
})();
