// ======================================================
// ACTIVIDAD 10 – Animaciones de productos notables
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("producto");
  const btn = document.getElementById("btnAnimar");
  const panel = document.getElementById("panelAnimacion");

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
    const tipo = select.value;
    let pasos = [];

    if (tipo === "apb2") {
      pasos = [
        "1️⃣ Producto seleccionado: (a + b)²",
        "2️⃣ Interpretación: (a + b)(a + b)",
        "3️⃣ Distribuimos:\n   a(a + b) + b(a + b)",
        "4️⃣ Desarrollamos los productos:\n   a² + ab + ab + b²",
        "5️⃣ Agrupamos términos semejantes:\n   a² + 2ab + b²"
      ];
    } else if (tipo === "amb2") {
      pasos = [
        "1️⃣ Producto seleccionado: (a - b)²",
        "2️⃣ Interpretación: (a - b)(a - b)",
        "3️⃣ Distribuimos:\n   a(a - b) - b(a - b)",
        "4️⃣ Desarrollamos los productos:\n   a² - ab - ab + b²",
        "5️⃣ Agrupamos términos semejantes:\n   a² - 2ab + b²"
      ];
    } else {
      pasos = [
        "1️⃣ Producto seleccionado: (a + b)(a - b)",
        "2️⃣ Distribuimos:\n   a(a - b) + b(a - b)",
        "3️⃣ Desarrollamos los productos:\n   a² - ab + ab - b²",
        "4️⃣ Simplificamos términos opuestos:\n   a² - b²"
      ];
    }

    animarPasos(pasos);
  });
});
