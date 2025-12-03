// ======================================================
// ACTIVIDAD 12 – Animaciones de factorización
// Trinomios de la forma x² + bx + c
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const bInput = document.getElementById("coefB");
  const cInput = document.getElementById("coefC");
  const btn = document.getElementById("btnFactorizar");
  const panel = document.getElementById("panelFactorizacion");

  // Muestra los pasos con una animación suave
  function animarPasos(pasos) {
    panel.innerHTML = "";
    let i = 0;

    function mostrarPaso() {
      if (i >= pasos.length) return;

      const linea = document.createElement("div");
      linea.textContent = pasos[i];
      linea.style.opacity = "0";
      linea.style.transform = "translateY(4px)";
      linea.style.whiteSpace = "pre-line";
      linea.style.transition = "opacity 0.25s ease, transform 0.25s ease";

      panel.appendChild(linea);

      requestAnimationFrame(() => {
        linea.style.opacity = "1";
        linea.style.transform = "translateY(0)";
      });

      i++;
      setTimeout(mostrarPaso, 450);
    }

    mostrarPaso();
  }

  btn.addEventListener("click", () => {
    const b = parseInt(bInput.value, 10);
    const c = parseInt(cInput.value, 10);

    if (isNaN(b) || isNaN(c)) {
      panel.textContent = "Introduce valores enteros para b y c.";
      return;
    }

    // Buscamos dos enteros m y n tales que:
    // 1) m + n = b
    // 2) m · n = c
    let m = null;
    let n = null;

    for (let i = -50; i <= 50; i++) {
      for (let j = -50; j <= 50; j++) {
        if (i + j === b && i * j === c) {
          m = i;
          n = j;
          break;
        }
      }
      if (m !== null) break;
    }

    if (m === null) {
      panel.textContent =
        "No se encontró una factorización sencilla con enteros para x² + " +
        b +
        "x + " +
        c +
        ".";
      return;
    }

    const pasos = [
      `Trinomio: x² + ${b}x + ${c}`,
      "Buscamos dos números enteros m y n tales que:",
      `   m + n = ${b}`,
      `   m · n = ${c}`,
      `Se encuentran: m = ${m}, n = ${n}`,
      "Reescribimos el término bx separándolo en mx + nx:",
      `   x² + ${b}x + ${c} = x² + ${m}x + ${n}x + ${c}`,
      "Agrupamos en dos pares:",
      `   (x² + ${m}x) + (${n}x + ${c})`,
      "Factor común en cada grupo (usando que c = m·n):",
      `   x(x + ${m}) + ${n}(x + ${m})`,
      "Factor común (x + m):",
      `   (x + ${m})(x + ${n})`,
      `Por lo tanto: x² + ${b}x + ${c} = (x + ${m})(x + ${n})`
    ];

    animarPasos(pasos);
  });
});
