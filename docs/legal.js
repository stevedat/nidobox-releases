(function () {
  var STORAGE_KEY = "nidobox.docs.lang";

  function resolveInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = params.get("lang");
      if (q === "vi" || q === "en") return q;
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "vi" || saved === "en") return saved;
    } catch (_) {}
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("vi") === 0 ? "vi" : "en";
  }

  function applyLang(lang, persist) {
    var normalized = lang === "vi" ? "vi" : "en";
    document.documentElement.setAttribute("data-lang", normalized);
    document.documentElement.setAttribute("lang", normalized);
    var btns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) {
      var active = btns[i].getAttribute("data-set-lang") === normalized;
      btns[i].setAttribute("aria-pressed", active ? "true" : "false");
    }
    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, normalized);
      } catch (_) {}
    }
  }

  applyLang(resolveInitialLang(), false);

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(document.documentElement.getAttribute("data-lang") || "en", false);
    var btns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (ev) {
        var target = ev.currentTarget.getAttribute("data-set-lang");
        applyLang(target, true);
      });
    }
  });
})();
