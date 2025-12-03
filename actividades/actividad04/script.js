// ======================================================
// ACTIVIDAD 4 – Conversión de forma polar a exponencial
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const moduloInput = document.getElementById("modulo");
  const anguloInput = document.getElementById("angulo");
  const btn = document.getElementById("btnConvertir");
  const panel = document.getElementById("panelPasos");

  /**
   * Muestra los pasos de conversión:
   *  - grados → radianes
   *  - forma trigonométrica
   *  - forma rectangular aproximada
   *  - forma exponencial
   */
  function mostrarPasos(r, thetaDeg) {
    const thetaRad = (thetaDeg * Math.PI) / 180;
    const cos = Math.cos(thetaRad);
    const sin = Math.sin(thetaRad);

    const cosR = cos.toFixed(4);
    const sinR = sin.toFixed(4);
    const thetaRadR = thetaRad.toFixed(4);

    // Forma rectangular aproximada
    const x = (r * cos).toFixed(4);
    const y = (r * sin).toFixed(4);

    panel.textContent = "Procesando…";

    const pasos = [
      `1️⃣ Datos ingresados: r = ${r},  θ = ${thetaDeg}°`,
      `2️⃣ Conversión a radianes: θ = ${thetaDeg}° · π/180 ≈ ${thetaRadR} rad`,
      `3️⃣ Forma trigonométrica: z = r (cos θ + i·sen θ)`,
      `   z = ${r} (cos(${thetaRadR}) + i·sen(${thetaRadR}))`,
      `   cos(${thetaRadR}) ≈ ${cosR},  sen(${thetaRadR}) ≈ ${sinR}`,
      `   z ≈ ${r} (${cosR} + i·${sinR})`,
      `   z ≈ ${x} + i·${y}`,
      `4️⃣ Forma exponencial (Euler): z = r · e^{iθ} = ${r} · e^{i·${thetaRadR}}`
    ];

    // Limpiar panel y animar la aparición de cada línea
    panel.innerHTML = "";
    let i = 0;

    function animaPaso() {
      if (i >= pasos.length) return;

      const linea = document.createElement("div");
      linea.textContent = pasos[i];
      linea.style.opacity = "0";
      linea.style.transition = "opacity 0.3s ease";
      linea.style.whiteSpace = "pre-line";

      panel.appendChild(linea);

      requestAnimationFrame(() => {
        linea.style.opacity = "1";
      });

      i++;
      setTimeout(animaPaso, 350);
    }

    animaPaso();
  }

  btn.addEventListener("click", () => {
    const r = parseFloat(moduloInput.value);
    const theta = parseFloat(anguloInput.value);

    // Validaciones básicas
    if (isNaN(r) || isNaN(theta)) {
      panel.textContent = "Por favor, escribe un valor válido para r y θ.";
      return;
    }

    if (r < 0) {
      panel.textContent = "El módulo r debe ser mayor o igual a 0.";
      return;
    }

    mostrarPasos(r, theta);
  });
});
