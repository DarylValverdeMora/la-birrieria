(() => {
  const { negocio: N, favoritos, menu } = window.LB;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const crc = (n) => "₡" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const waLink = (text) => `https://wa.me/${N.whatsapp}?text=${encodeURIComponent(text)}`;
  const FLAME = '<svg class="flame" viewBox="0 0 18 22" aria-hidden="true"><path d="M9 0c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3-1-6 1-9Z"/></svg>';

  /* ---------- Datos fijos en la página ---------- */
  $$(".js-wa").forEach((a) => (a.href = waLink(`Hola ${N.nombre}, quiero hacer un pedido.`)));
  $$(".js-ig").forEach((a) => (a.href = `https://www.instagram.com/${N.instagram}/`));
  $$(".js-map, #map").forEach((a) => (a.href = N.mapsUrl));
  $$("[data-tel]").forEach((el) => (el.textContent = N.telefonoVisible));
  $$("[data-dir]").forEach((el) => (el.textContent = N.direccion));
  $$("[data-pagos]").forEach((el) => (el.textContent = N.pagos));
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- Abierto / cerrado (hora de Costa Rica, UTC-6) ---------- */
  const crNow = () => { const d = new Date(Date.now() + (new Date().getTimezoneOffset() - 360) * 60000); return d; };
  function updateStatus() {
    const d = crNow();
    const h = d.getHours() + d.getMinutes() / 60;
    const open = h >= N.horario.abre && h < N.horario.cierra;
    $("#status").classList.toggle("is-open", open);
    $("#status-txt").textContent = open ? "Abierto ahora · cerramos a las 11 p.m." : "Cerrado ahora · abrimos a las 11 a.m.";
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const orden = [1, 2, 3, 4, 5, 6, 0];
    $("#week").innerHTML = orden.map((i) =>
      `<li class="${i === d.getDay() ? "today" : ""}"${i === d.getDay() ? ' aria-current="date"' : ""}><b>${dias[i]}</b>11–11</li>`).join("");
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  /* ---------- Cinta ---------- */
  const words = ["BIRRIATACOS", "QUESABIRRIAS", "BIRRIARAMEN", "BURRIPIZZA", "PAPAS GOAT", "CONSOMÉ", "MINI BURGERS", "BIRRIAFRIES"];
  const half = words.map((w) => `<span>${w}${FLAME}</span>`).join("");
  $("#marquee").innerHTML = half + half;

  /* ---------- Gotas de consomé ---------- */
  (function drips() {
    const ds = [[40, 22, 30], [150, 16, 44], [250, 26, 24], [380, 18, 50], [470, 30, 28], [600, 16, 40], [700, 24, 52], [820, 20, 30], [930, 28, 46], [1050, 18, 26], [1130, 22, 42]];
    let p = "M0 0 H1200 V8";
    for (const [x, w, L] of ds.slice().reverse()) {
      p += ` L${x + w} 8 C${x + w} 18 ${x + w} ${L} ${x + w / 2} ${L} C${x} ${L} ${x} 18 ${x} 8`;
    }
    p += " L0 8 Z";
    $$("[data-drip] path").forEach((el) => el.setAttribute("d", p));
  })();

  /* ---------- Favoritos ---------- */
  $("#favs").innerHTML = favoritos.map((f, i) => `
    <article class="fav">
      ${i === 0 ? '<span class="fav-badge">El clásico</span>' : ""}
      <div class="fav-img"><img src="${f.img}" alt="${esc(f.nombre)}" width="${f.w}" height="${f.h}" loading="${i ? "lazy" : "eager"}"></div>
      <div class="fav-body">
        <div class="fav-top"><h3>${esc(f.nombre)}</h3><span class="fav-price">${f.variante ? "<small>desde</small>" : ""}${crc(f.desde)}</span></div>
        <p>${esc(f.texto)}</p>
        <button class="btn btn-fire" type="button" data-add="${f.id}" ${f.variante ? `data-var="${esc(f.variante)}"` : ""}>Agregar${f.boton ? " " + esc(f.boton) : ""}</button>
      </div>
    </article>`).join("");

  /* ---------- Menú ---------- */
  const index = {};
  menu.forEach((c) => c.items.forEach((it) => (index[it.id] = it)));

  $("#cats").innerHTML = menu.map((c) => `<button class="cat" type="button" data-cat="${c.id}">${esc(c.titulo)}</button>`).join("");
  $("#board").innerHTML = menu.map((c) => `
    <section class="block" id="${c.id}" aria-labelledby="${c.id}-t">
      <div class="block-head">${FLAME}<h3 id="${c.id}-t">${esc(c.titulo)}</h3></div>
      ${c.nota ? `<p class="block-note">${esc(c.nota)}</p>` : ""}
      <ul class="items">
        ${c.items.map((it) => it.variantes ? `
          <li class="it">
            <div class="it-row"><span class="it-name">${esc(it.nombre)}</span></div>
            ${it.desc ? `<p class="it-desc">${esc(it.desc)}</p>` : ""}
            <div class="vars">
              ${it.variantes.map(([v, p]) => `<button class="var" type="button" data-add="${it.id}" data-var="${esc(v)}" aria-label="Agregar ${esc(it.nombre)} ${esc(v)} por ${crc(p)}"><b>${esc(v)}</b><span>${crc(p)}</span></button>`).join("")}
            </div>
          </li>` : `
          <li class="it">
            <div class="it-row">
              <span class="it-name">${esc(it.nombre)}</span><span class="dots"></span>
              <span class="it-price">${crc(it.precio)}</span>
              <button class="add" type="button" data-add="${it.id}" aria-label="Agregar ${esc(it.nombre)}">+</button>
            </div>
            ${it.desc ? `<p class="it-desc">${esc(it.desc)}</p>` : ""}
          </li>`).join("")}
      </ul>
    </section>`).join("");

  // Chips de categorías: saltan a la sección y marcan la visible.
  $("#cats").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (b) document.getElementById(b.dataset.cat).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        $$(".cat").forEach((c) => c.setAttribute("aria-current", c.dataset.cat === en.target.id ? "true" : "false"));
        const cur = $(`.cat[data-cat="${en.target.id}"]`);
        const row = $("#cats");
        if (cur) row.scrollTo({ left: cur.offsetLeft - row.clientWidth / 2 + cur.clientWidth / 2, behavior: "smooth" });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    $$(".block").forEach((b) => io.observe(b));
  }

  /* ---------- Pedido ---------- */
  const KEY = "lb-pedido-v1";
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { cart = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch {} };

  function add(id, variante) {
    const it = index[id];
    if (!it) return;
    let precio = it.precio;
    if (it.variantes) {
      const v = it.variantes.find(([n]) => n === variante) || it.variantes[0];
      variante = v[0]; precio = v[1];
    }
    const k = id + "|" + (variante || "");
    cart[k] = cart[k] || { id, nombre: it.nombre, variante: variante || "", precio, qty: 0 };
    cart[k].qty++;
    save(); render();
    toast(`Agregado: ${it.nombre}${variante ? " " + variante : ""}`);
    $("#cartbar").classList.remove("bump"); void $("#cartbar").offsetWidth; $("#cartbar").classList.add("bump");
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    add(b.dataset.add, b.dataset.var);
    b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
  });

  const lines = () => Object.entries(cart).filter(([, l]) => l.qty > 0);
  const total = () => lines().reduce((s, [, l]) => s + l.precio * l.qty, 0);
  const count = () => lines().reduce((s, [, l]) => s + l.qty, 0);

  function message() {
    const expres = $("#e-expres").checked;
    const out = [`Hola ${N.nombre}, quiero hacer este pedido:`, ""];
    lines().forEach(([, l]) => {
      const name = l.variante ? `${l.nombre} (${l.variante.replace(" ×", " unidades")})` : l.nombre;
      out.push(`• ${l.qty} × ${name} — ${crc(l.precio * l.qty)}`);
    });
    out.push("", `Total aproximado: ${crc(total())}`, `Entrega: ${expres ? "Servicio exprés" : "Recojo en el local"}`);
    const nombre = $("#f-nombre").value.trim();
    const dir = $("#f-dir").value.trim();
    const nota = $("#f-nota").value.trim();
    if (nombre) out.push(`Nombre: ${nombre}`);
    if (expres && dir) out.push(`Dirección: ${dir}`);
    if (nota) out.push(`Nota: ${nota}`);
    return out.join("\n");
  }

  function render() {
    const n = count();
    $("#cartbar").hidden = n === 0;
    $("#wafab").hidden = n > 0;
    $("#cartbar-n").textContent = n;
    $("#cartbar-p").textContent = crc(total());
    $("#lines").innerHTML = lines().map(([k, l]) => `
      <li class="line">
        <span class="line-name">${esc(l.nombre)}${l.variante ? `<small>${esc(l.variante)}</small>` : ""}</span>
        <span class="line-sub">${crc(l.precio * l.qty)}</span>
        <div class="qty">
          <button type="button" data-q="-1" data-k="${esc(k)}" aria-label="Quitar uno de ${esc(l.nombre)}">−</button>
          <output>${l.qty}</output>
          <button type="button" data-q="1" data-k="${esc(k)}" aria-label="Agregar otro ${esc(l.nombre)}">+</button>
        </div>
      </li>`).join("");
    $("#empty").hidden = n > 0;
    $("#total").textContent = crc(total());
    const send = $("#send");
    if (n > 0) { send.href = waLink(message()); send.removeAttribute("aria-disabled"); send.tabIndex = 0; }
    else { send.href = "#"; send.setAttribute("aria-disabled", "true"); send.tabIndex = -1; }
  }

  $("#lines").addEventListener("click", (e) => {
    const b = e.target.closest("[data-q]");
    if (!b) return;
    const l = cart[b.dataset.k];
    if (!l) return;
    l.qty += Number(b.dataset.q);
    if (l.qty <= 0) delete cart[b.dataset.k];
    save(); render();
  });

  const form = $("#order-form");
  form.addEventListener("input", () => {
    const expres = $("#e-expres").checked;
    $("#dir-field").hidden = !expres;
    $("#expres-note").hidden = !expres;
    render();
  });
  $("#expres-note").textContent = N.expres;
  $("#clear").addEventListener("click", () => { cart = {}; save(); render(); });

  const drawer = $("#drawer");
  $("#cartbar").addEventListener("click", () => {
    if (typeof drawer.showModal === "function") drawer.showModal(); else drawer.setAttribute("open", "");
  });
  drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.close(); });

  /* ---------- Copiar número ---------- */
  $$("[data-copy]").forEach((b) => b.addEventListener("click", () => {
    const done = () => { b.textContent = "Copiado"; setTimeout(() => (b.textContent = "Copiar"), 1600); };
    const fallback = () => {
      const t = b.previousElementSibling; const r = document.createRange(); r.selectNodeContents(t);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Seleccionado";
    };
    try { navigator.clipboard.writeText(N.telefonoVisible).then(done, fallback); } catch { fallback(); }
  }));

  /* ---------- Aviso ---------- */
  let tt;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 1600);
  }

  render();
})();
