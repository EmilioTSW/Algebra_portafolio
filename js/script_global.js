document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente ✔");

  // Seleccionar todas las actividades
  const cards = document.querySelectorAll(".card-actividad");

  // Animación de entrada
  cards.forEach((card, index) => {
    // Estado inicial
    card.style.opacity = "0";
    card.style.transform = "translateY(15px) scale(0.98)";

    // Animación escalonada
    setTimeout(() => {
      card.style.transition =
        "opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, 120 * index);
  });

  // Efecto hover suave
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px) scale(1.02)";
      card.style.transition =
        "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.transition =
        "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
    });
  });
});
