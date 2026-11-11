/* Small helper library shared by all views */

/* Route registry — view files populate this as they load, so it must exist first. */
const VIEWS = {};

function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}

/* Deep clone fallback for browsers without structuredClone */
function deepClone(obj) {
  if (typeof structuredClone === "function") return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj));
}

/* Recycled exam questions keep their base id so stats, notes and
   bookmarks always point at the original bank question. */
function qKey(q) {
  if (typeof q === "string") return q;
  return q ? (q.baseId || q.id) : "";
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return [h, m, sec].map((v) => String(v).padStart(2, "0")).join(":");
}

function formatDuration(seconds) {
  const s = Math.floor(seconds);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function todayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

function pluralize(n, word) { return `${n} ${word}${n === 1 ? "" : "s"}`; }

function pct(correct, total) { return total > 0 ? Math.round((correct / total) * 100) : 0; }

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function toast(message, type = "info") {
  let host = $("#toast-host");
  if (!host) {
    host = el("div", { id: "toast-host", class: "toast-host" });
    document.body.appendChild(host);
  }
  const node = el("div", { class: `toast toast-${type}` }, message);
  host.appendChild(node);
  setTimeout(() => {
    node.classList.add("toast-out");
    setTimeout(() => node.remove(), 300);
  }, 2600);
}

function confirmDialog(title, body, confirmLabel = "Confirm") {
  return new Promise((resolve) => {
    const overlay = el("div", { class: "modal-overlay" });
    const close = (val) => { overlay.remove(); resolve(val); };
    overlay.appendChild(el("div", { class: "modal" }, [
      el("h3", {}, title),
      el("p", { class: "muted" }, body),
      el("div", { class: "modal-actions" }, [
        el("button", { class: "btn btn-ghost", onclick: () => close(false) }, "Cancel"),
        el("button", { class: "btn btn-primary", onclick: () => close(true) }, confirmLabel)
      ])
    ]));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(false); });
    document.body.appendChild(overlay);
  });
}

/* Simple dependency-free canvas line chart */
function drawLineChart(canvas, series, { yMax = null, height = 180 } = {}) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 600;
  const h = height;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.height = h + "px";
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const pad = { l: 36, r: 12, t: 14, b: 24 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const maxY = yMax ?? Math.max(10, ...series.flatMap((s) => s.data));

  const styles = getComputedStyle(document.body);
  const gridColor = styles.getPropertyValue("--border").trim() || "#2a2f45";
  const textColor = styles.getPropertyValue("--muted").trim() || "#8b93a7";

  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  ctx.font = "10px system-ui, sans-serif";
  ctx.fillStyle = textColor;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (innerH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(w - pad.r, y);
    ctx.stroke();
    const val = Math.round(maxY - (maxY / 4) * i);
    ctx.fillText(String(val), 4, y + 3);
  }

  const count = Math.max(1, ...series.map((s) => s.data.length));
  const xFor = (i) => pad.l + (count === 1 ? innerW / 2 : (innerW / (count - 1)) * i);
  const yFor = (v) => pad.t + innerH - (v / maxY) * innerH;

  series.forEach((s) => {
    if (!s.data.length) return;
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    s.data.forEach((v, i) => (i === 0 ? ctx.moveTo(xFor(i), yFor(v)) : ctx.lineTo(xFor(i), yFor(v))));
    ctx.stroke();
    ctx.fillStyle = s.color;
    s.data.forEach((v, i) => {
      ctx.beginPath();
      ctx.arc(xFor(i), yFor(v), 2.6, 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

/* Circular progress ring (SVG string) */
function ring(value, size = 64, stroke = 7, color = "#6366f1") {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (clamp(value, 0, 100) / 100) * c;
  return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--border)" stroke-width="${stroke}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
      transform="rotate(-90 ${size / 2} ${size / 2})"/>
    <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle"
      fill="var(--text)" font-size="${size * 0.24}" font-weight="700">${Math.round(value)}%</text>
  </svg>`;
}
