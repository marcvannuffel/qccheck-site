// The site's pages as markdown for agents (copied from podcastmagic360-site/tools/markdown.mjs; English only:
// the German half of each bilingual text, lang="de", is left out).
// Each page links its own (<link rel="alternate" type="text/markdown">), llms.txt lists them.
//   node tools/markdown.mjs          write the .md files (after changing a page)
//   node tools/markdown.mjs --check  fail when one is out of date (the GitHub check)
// The page's <main> and footer, with title and description; menus, buttons, graphics and
// whatever is marked data-agent="skip" (the interactive demos) left out.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const PAGES = ["index", "broadcasters", "install"];
const SITE = "https://swissqcguru.com/";

// elements that are only for the eye or the hand: left out with everything in them
const SKIP = new Set(["script", "style", "svg", "video", "audio", "noscript", "template", "button", "nav", "iframe", "canvas", "select", "form", "head"]);
const VOID = new Set(["br", "img", "hr", "meta", "link", "input", "source", "track", "wbr", "area", "base", "col", "embed", "param"]);
const BLOCK = new Set(["p", "div", "section", "article", "header", "footer", "main", "aside", "figure", "figcaption", "blockquote", "details", "dl", "dd", "table", "address"]);

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…", copy: "©", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", times: "×", middot: "·", rsaquo: "›" };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
  e[0] === "#" ? String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : ENTITIES[e.toLowerCase()] ?? m);
const attr = (tag, name) => {
  const m = new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i").exec(tag);
  return m ? decode(m[2] ?? m[3] ?? m[4] ?? "") : null;
};

/** The page as markdown: title and description, then <main> (or <body>) and the footer. */
export function htmlToMarkdown(html, url) {
  const title = decode(/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1]?.trim() ?? "");
  const description = /<meta[^>]+name=["']description["'][^>]*>/i.exec(html)?.[0];
  const main = /<main[\s>][\s\S]*<\/main>/i.exec(html)?.[0] ?? /<body[\s>][\s\S]*<\/body>/i.exec(html)?.[0] ?? html;
  const footer = /<footer[\s>][\s\S]*?<\/footer>/i.exec(html)?.[0] ?? "";
  const abs = (href) => { try { return new URL(href, url).href; } catch { return href; } };

  let out = "";
  const block = () => { out = out.replace(/[ \t]+$/, ""); if (out && !out.endsWith("\n\n")) out += out.endsWith("\n") ? "\n" : "\n\n"; };
  const line = () => { out = out.replace(/[ \t]+$/, ""); if (out && !out.endsWith("\n")) out += "\n"; };
  const lists = [];
  const links = [];
  let row = null, firstRow = false, cellStart = 0, rowStart = 0;
  let pre = 0, skip = 0;

  for (const token of (main + footer).replace(/<!--[\s\S]*?-->/g, "").split(/(<[^>]+>)/)) {
    if (!token) continue;
    if (token[0] !== "<") {
      if (skip) continue;
      const text = decode(pre ? token : token.replace(/\s+/g, " "));
      out += !pre && (out.endsWith("\n") || out.endsWith("[") || !out) ? text.replace(/^ /, "") : text;
      continue;
    }
    const m = /^<\s*(\/)?\s*([a-z][a-z0-9]*)/i.exec(token);
    if (!m) continue;
    const close = !!m[1], name = m[2].toLowerCase(), selfClosing = VOID.has(name) || /\/>$/.test(token);
    // inside something left out: only count the depth until it closes
    if (skip) { if (!selfClosing) skip += close ? -1 : 1; continue; }
    if (!close && !selfClosing && (SKIP.has(name) || /\s(aria-hidden\s*=\s*["']?true|data-agent\s*=\s*["']?skip|lang\s*=\s*["']?de\b)/i.test(token))) { skip = 1; continue; }

    if (/^h[1-6]$/.test(name)) { block(); if (!close) out += "#".repeat(Number(name[1])) + " "; continue; }
    switch (name) {
      case "br": line(); break;
      case "hr": block(); out += "---"; block(); break;
      case "ul": case "ol": block(); if (close) lists.pop(); else lists.push({ ordered: name === "ol", n: 0 }); break;
      case "li": if (!close) { line(); const l = lists[lists.length - 1]; out += l?.ordered ? `${++l.n}. ` : "- "; } break;
      case "b": case "strong": out += "**"; break;
      case "em": out += "*"; break; // <i> stays plain: the site uses it for swatches and dots
      case "code": if (!pre) out += "`"; break;
      case "pre": block(); if (close) { pre = 0; out = out.replace(/\n?$/, "\n```"); block(); } else { pre = 1; out += "```\n"; } break;
      case "span": case "small": if (!close && out && !/[\s([]$/.test(out)) out += " "; break;
      case "a":
        if (!close) links.push({ at: out.length, href: attr(token, "href") });
        else {
          const l = links.pop();
          if (!l) break;
          const text = out.slice(l.at).trim();
          if (text && l.href && !l.href.startsWith("#") && !/^javascript:/i.test(l.href)) out = `${out.slice(0, l.at)}[${text}](${abs(l.href)})`;
        }
        break;
      case "img": { const alt = attr(token, "alt"); const src = attr(token, "src"); if (alt && src) out += `![${alt}](${abs(src)})`; break; }
      case "summary": block(); if (!close) out += "### "; break;
      case "dt": block(); out += "**"; break;
      case "tr":
        if (!close) { line(); row = []; rowStart = out.length; }
        else if (row) {
          out = `${out.slice(0, rowStart)}| ${row.join(" | ")} |`;
          // markdown needs a header row: the first row of every table is one (th or not)
          if (firstRow) { out += `\n| ${row.map(() => "---").join(" | ")} |`; firstRow = false; }
          row = null;
        }
        break;
      case "th": case "td":
        if (!close) cellStart = out.length;
        else if (row) row.push(out.slice(cellStart).replace(/\s+/g, " ").trim().replace(/\|/g, "\\|"));
        break;
      case "table": block(); if (!close) firstRow = true; break;
      default: if (BLOCK.has(name)) block();
    }
  }

  // tidy: no trailing spaces, no indented lines outside code, at most one empty line
  let inCode = false;
  const body = out.split("\n").map((l) => {
    if (l.startsWith("```")) inCode = !inCode;
    return inCode ? l.trimEnd() : l.trim();
  }).join("\n").replace(/\n{3,}/g, "\n\n").trim();
  const head = [title && `# ${title}`, description && attr(description, "content") && `> ${attr(description, "content")}`].filter(Boolean).join("\n\n");
  return `${head}\n\n${body}\n`;
}


/** Every page's markdown as it should be: { "index.md": "…", … } */
export function render(root) {
  return Object.fromEntries(PAGES.map((p) => [`${p}.md`,
    htmlToMarkdown(readFileSync(join(root, `${p}.html`), "utf8"), new URL(p === "index" ? "" : `${p}.html`, SITE))]));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const check = process.argv.includes("--check");
  const stale = [];
  for (const [file, md] of Object.entries(render(root))) {
    const path = join(root, file);
    if (existsSync(path) && readFileSync(path, "utf8") === md) continue;
    if (check) stale.push(file);
    else { writeFileSync(path, md); console.log(`written: ${file}`); }
  }
  if (stale.length) {
    console.error(`out of date: ${stale.join(", ")} – run: node tools/markdown.mjs`);
    process.exit(1);
  }
}
