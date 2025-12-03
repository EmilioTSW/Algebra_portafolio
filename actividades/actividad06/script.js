// ======================================================
// ACTIVIDAD 6 – Demostraciones de expresiones algebraicas
// Productos notables básicos
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const selectExp = document.getElementById("expresion");
  const aInput = document.getElementById("valorA");
  const bInput = document.getElementById("valorB");
  const btn = document.getElementById("btnDemostrar");
  const panel = document.getElementById("panelDemostracion");

  // Formatear número (evitar decimales larguísimos)
  function formatNumber(n) {
    if (Number.isNaN(n)) return "NaN";
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(4);
  }

  function animarPasos(pasos) {
    panel.innerHTML = "";
    let i = 0;

    function mostrarLinea() {
      if (i >= pasos.length) return;

      const linea = document.createElement("div");
      linea.textContent = pasos[i];
      linea.style.opacity = "0";
      linea.style.transition = "opacity 0.25s ease";
      linea.style.whiteSpace = "pre-line";

      panel.appendChild(linea);

      requestAnimationFrame(() => {
        linea.style.opacity = "1";
      });

      i++;
      setTimeout(mostrarLinea, 220);
    }

    mostrarLinea();
  }

  btn.addEventListener("click", () => {
    const tipo = selectExp.value;
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);

    if (isNaN(a) || isNaN(b)) {
      panel.textContent = "Introduce valores válidos para a y b.";
      return;
    }

    const a2 = a * a;
    const b2 = b * b;
    const dosab = 2 * a * b;

    let pasos = [];
    let resultado;

    if (tipo === "apb2") {
      // (a + b)² = a² + 2ab + b²
      resultado = a2 + dosab + b2;

      pasos = [
        "Expresión: (a + b)²",
        "Fórmula general: (a + b)² = a² + 2ab + b²",
        `Sustituyendo: a = ${formatNumber(a)}, b = ${formatNumber(b)}`,
        `a² = (${formatNumber(a)})² = ${formatNumber(a2)}`,
        `b² = (${formatNumber(b)})² = ${formatNumber(b2)}`,
        `2ab = 2 · ${formatNumber(a)} · ${formatNumber(b)} = ${formatNumber(dosab)}`,
        `a² + 2ab + b² = ${formatNumber(a2)} + ${formatNumber(dosab)} + ${formatNumber(b2)}`,
        `Resultado final: (a + b)² = ${formatNumber(resultado)}`
      ];
    } else if (tipo === "amb2") {
      // (a - b)² = a² - 2ab + b²
      resultado = a2 - dosab + b2;

      pasos = [
        "Expresión: (a - b)²",
        "Fórmula general: (a - b)² = a² - 2ab + b²",
        `Sustituyendo: a = ${formatNumber(a)}, b = ${formatNumber(b)}`,
        `a² = (${formatNumber(a)})² = ${formatNumber(a2)}`,
        `b² = (${formatNumber(b)})² = ${formatNumber(b2)}`,
        `2ab = 2 · ${formatNumber(a)} · ${formatNumber(b)} = ${formatNumber(dosab)}`,
        `a² - 2ab + b² = ${formatNumber(a2)} - ${formatNumber(dosab)} + ${formatNumber(b2)}`,
        `Resultado final: (a - b)² = ${formatNumber(resultado)}`
      ];
    } else {
      // (a + b)(a - b) = a² - b²
      resultado = a2 - b2;

      pasos = [
        "Expresión: (a + b)(a - b)",
        "Fórmula general: (a + b)(a - b) = a² - b²",
        `Sustituyendo: a = ${formatNumber(a)}, b = ${formatNumber(b)}`,
        `a² = (${formatNumber(a)})² = ${formatNumber(a2)}`,
        `b² = (${formatNumber(b)})² = ${formatNumber(b2)}`,
        `a² - b² = ${formatNumber(a2)} - ${formatNumber(b2)}`,
        `Resultado final: (a + b)(a - b) = ${formatNumber(resultado)}`
      ];
    }

    animarPasos(pasos);
  });
});
