// Swiss QC Guru – Produktseite: Sprache (Englisch Vorgabe, Deutsch zuschaltbar), gleicher Speicher wie die
// Installationsseite (site.js, Schlüssel qcLang), damit die Wahl beim Wechsel zwischen den Seiten bleibt.
(() => {
  "use strict";
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* egal */ } } };
  function setLang(l) {
    const lang = l === "de" ? "de" : "en";
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-switch]").forEach((b) => { b.textContent = lang === "de" ? "English" : "Deutsch"; });
    store.set("qcLang", lang);
  }
  setLang(new URLSearchParams(location.search).get("lang") || store.get("qcLang") || "en");
  document.querySelectorAll("[data-lang-switch]").forEach((b) => b.addEventListener("click", () => setLang(document.documentElement.dataset.lang === "de" ? "en" : "de")));
})();
