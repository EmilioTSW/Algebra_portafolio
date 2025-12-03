/* ======================================================
   ACTIVIDAD 2 — SCRIPT COMPLETO PARA NÚMEROS COMPLEJOS
   ====================================================== */

/* ---------------------------------------------
   Parsear un número complejo en formato:
   a+bi, a-bi, a, bi, -bi, etc.
--------------------------------------------- */
function parseComplejo(str) {
  if (!str) return null;
  str = str.replace(/\s+/g, "").toLowerCase();

  // Si solo es "a" → a + 0i
  if (/^[+-]?\d+$/.test(str)) {
    return { real: Number(str), imag: 0 };
  }

  // Si solo es "bi"
  if (/^[+-]?\d*i$/.test(str)) {
    const num = str.replace("i", "");
    return { real: 0, imag: Number(num || 1) };
  }

  // Formato más general: a+bi o a-bi
  const match = str.match(/^([+-]?\d+)([+-]\d*)i$/);

  if (!match) return null;

  const real = Number(match[1]);
  const imagString = match[2].replace("+", ""); // quita + innecesario
  const imag = Number(imagString);

  return { real, imag };
}

/* ---------------------------------------------
   Operaciones entre complejos
--------------------------------------------- */

function sumar(c1, c2) {
  return {
    real: c1.real + c2.real,
    imag: c1.imag + c2.imag
  };
}

function restar(c1, c2) {
  return {
    real: c1.real - c2.real,
    imag: c1.imag - c2.imag
  };
}

function multiplicar(c1, c2) {
  return {
    real: c1.real * c2.real - c1.imag * c2.imag,
    imag: c1.real * c2.imag + c1.imag * c2.real
  };
}

function conjugado(c) {
  return { real: c.real, imag: -c.imag };
}

/* ---------------------------------------------
   Formatear salida en forma a + bi
--------------------------------------------- */
function formatear(c) {
  const signo = c.imag >= 0 ? "+" : "";
  return `${c.real} ${signo} ${c.imag}i`;
}

/* ---------------------------------------------
   Inicialización
--------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");

  const res = document.getElementById("resultado");

  const btnSumar = document.getElementById("btnSumar");
  const btnRestar = document.getElementById("btnRestar");
  const btnMultiplicar = document.getElementById("btnMultiplicar");
  const btnConjugados = document.getElementById("btnConjugados");

  function obtener() {
    const c1 = parseComplejo(aInput.value);
    const c2 = parseComplejo(bInput.value);

    if (!c1 || !c2) {
      res.textContent = "Formato inválido. Usa: 2+3i, -1-4i, 3, -2i, etc.";
      return null;
    }
    return { c1, c2 };
  }

  /* -----------------------------
     Eventos de los botones
  ----------------------------- */

  btnSumar.addEventListener("click", () => {
    const datos = obtener();
    if (!datos) return;
    const r = sumar(datos.c1, datos.c2);
    res.textContent = "Suma: " + formatear(r);
  });

  btnRestar.addEventListener("click", () => {
    const datos = obtener();
    if (!datos) return;
    const r = restar(datos.c1, datos.c2);
    res.textContent = "Resta: " + formatear(r);
  });

  btnMultiplicar.addEventListener("click", () => {
    const datos = obtener();
    if (!datos) return;
    const r = multiplicar(datos.c1, datos.c2);
    res.textContent = "Producto: " + formatear(r);
  });

  btnConjugados.addEventListener("click", () => {
    const datos = obtener();
    if (!datos) return;

    const conj1 = conjugado(datos.c1);
    const conj2 = conjugado(datos.c2);

    res.textContent =
      `Conjugado de 1er número: ${formatear(conj1)}\n` +
      `Conjugado de 2do número: ${formatear(conj2)}`;
  });
});
