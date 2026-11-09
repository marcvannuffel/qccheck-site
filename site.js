// QCCheck – Installationsseite: Sprache (Englisch Vorgabe, Deutsch), Zeilen kopieren. Öffentlich seit 0.2.0 (5. Nov., Marc:
// Zugangscode entfernt).
(() => {
  "use strict";
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* egal */ } } };
  const $ = (id) => document.getElementById(id);
  // On github.io the page does not write to the clipboard itself: ad blockers (uBlock Origin "ClickFix") warn about
  // pages there that put a PowerShell line into the clipboard. The line is selected, the user copies it.
  const selectOnly = /\.github\.io$/i.test(location.hostname);
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  const copyLabel = (lang) => (selectOnly ? (lang === "de" ? "Markieren" : "Select") : lang === "de" ? "Kopieren" : "Copy");

  // Sprache: ?lang=de|en, sonst gespeichert, sonst Englisch
  function setLang(l) {
    const lang = l === "de" ? "de" : "en";
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-switch]").forEach((b) => { b.textContent = lang === "de" ? "English" : "Deutsch"; b.dataset.short = lang === "de" ? "EN" : "DE"; });
    document.querySelectorAll(".copy").forEach((b) => { if (!b.classList.contains("done")) b.textContent = copyLabel(lang); });
    store.set("qcLang", lang);
  }
  setLang(new URLSearchParams(location.search).get("lang") || store.get("qcLang") || "en");
  document.querySelectorAll("[data-lang-switch]").forEach((b) => b.addEventListener("click", () => setLang(document.documentElement.dataset.lang === "de" ? "en" : "de")));
  const de = () => document.documentElement.dataset.lang === "de";



  // Plattform: auf dem Mac der Mac-Reiter, sonst Windows; eine Wahl von Hand bleibt
  const tabs = [...document.querySelectorAll(".os-tabs [data-os]")];
  function showOs(os) {
    for (const t of tabs) t.setAttribute("aria-selected", String(t.dataset.os === os));
    for (const p of document.querySelectorAll(".os-pane")) p.hidden = p.dataset.os !== os;
  }
  const guess = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? "mac" : "win";
  showOs(store.get("qcOs") || guess);
  for (const t of tabs) t.addEventListener("click", () => { showOs(t.dataset.os); store.set("qcOs", t.dataset.os); });
  // Pfeiltasten zwischen den Reitern
  document.querySelector(".os-tabs")?.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const i = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true"), next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    next.click(); next.focus();
  });
  // Installationszeilen kopieren (Knopf oder Klick auf die Zeile); wo die Zwischenablage verweigert wird: markieren
  const select = (code) => { const r = document.createRange(); r.selectNodeContents(code); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  async function copy(code, button) {
    if (selectOnly) { select(code); button.textContent = mac ? "⌘C" : "Ctrl+C"; }
    else {
      try { await navigator.clipboard.writeText(code.textContent.trim()); button.textContent = de() ? "Kopiert" : "Copied"; }
      catch { select(code); button.textContent = de() ? "Markiert" : "Selected"; }
    }
    button.classList.add("done");
    setTimeout(() => { button.classList.remove("done"); button.textContent = copyLabel(document.documentElement.dataset.lang); }, selectOnly ? 4000 : 1800);
  }
  for (const box of document.querySelectorAll(".copyable")) {
    const code = box.querySelector("code"), button = box.querySelector(".copy");
    button.addEventListener("click", () => copy(code, button));
    code.addEventListener("click", () => { if (!String(getSelection())) copy(code, button); });
  }
})();
