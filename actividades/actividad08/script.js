// ======================================================
// ACTIVIDAD 8 – Calculadora de operaciones algebraicas
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const aInput = document.getElementById("opA");
  const bInput = document.getElementById("opB");
  const tipoSelect = document.getElementById("tipoOperacion");
  const btn = document.getElementById("btnCalcular");
  const panel = document.getElementById("panelCalc");

  // Formatear número (evita colas enormes de decimales)
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
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const tipo = tipoSelect.value;

    if (isNaN(a) || isNaN(b)) {
      panel.textContent = "Introduce valores válidos para a y b.";
      return;
    }

    let pasos = [];
    let resultado;

    const aF = formatNumber(a);
    const bF = formatNumber(b);

    if (tipo === "suma") {
      resultado = a + b;
      const rF = formatNumber(resultado);

      pasos = [
        "Operación seleccionada: Suma",
        "Expresión general: a + b",
        `Sustituyendo: a = ${aF}, b = ${bF}`,
        `Cálculo: ${aF} + ${bF} = ${rF}`,
        `Resultado final: a + b = ${rF}`
      ];
    } else if (tipo === "resta") {
      resultado = a - b;
      const rF = formatNumber(resultado);

      pasos = [
        "Operación seleccionada: Resta",
        "Expresión general: a - b",
        `Sustituyendo: a = ${aF}, b = ${bF}`,
        `Cálculo: ${aF} - ${bF} = ${rF}`,
        `Resultado final: a - b = ${rF}`
      ];
    } else if (tipo === "producto") {
      resultado = a * b;
      const rF = formatNumber(resultado);

      pasos = [
        "Operación seleccionada: Producto",
        "Expresión general: a · b",
        `Sustituyendo: a = ${aF}, b = ${bF}`,
        `Cálculo: ${aF} · ${bF} = ${rF}`,
        `Resultado final: a · b = ${rF}`
      ];
    } else {
      // división
      if (b === 0) {
        panel.textContent = "No es posible dividir entre cero.";
        return;
      }
      resultado = a / b;
      const rF = formatNumber(resultado);

      pasos = [
        "Operación seleccionada: División",
        "Expresión general: a ÷ b",
        `Sustituyendo: a = ${aF}, b = ${bF}`,
        `Cálculo: ${aF} ÷ ${bF} = ${rF}`,
        `Resultado final: a ÷ b = ${rF}`
      ];
    }

    animarPasos(pasos);
  });
});
