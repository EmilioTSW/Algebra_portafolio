// script.js de Actividad 2 (ejemplo)
// Sustituye este código por el de tu práctica original.

function parseComplejo(str) {
  // MUY simplificado: solo ejemplos tipo "2+3i" o "2-3i"
  const limpio = str.replace(/\s+/g, "");
  const match = limpio.match(/^([+-]?\d+)([+-]\d+)i$/);
  if (!match) return null;
  return { real: Number(match[1]), imag: Number(match[2]) };
}

document.addEventListener("DOMContentLoaded", () => {
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const btn = document.getElementById("btnSumar");
  const res = document.getElementById("resultado");

  btn.addEventListener("click", () => {
    const c1 = parseComplejo(aInput.value);
    const c2 = parseComplejo(bInput.value);

    if (!c1 || !c2) {
      res.textContent =
        "Por favor, escribe los complejos en el formato a+bi o a-bi.";
      return;
    }

    const real = c1.real + c2.real;
    const imag = c1.imag + c2.imag;
    res.textContent = `Resultado: ${real} ${imag >= 0 ? "+" : ""}${imag}i`;
  });
});