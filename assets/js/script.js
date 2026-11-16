const btnTema = document.getElementById("btn-tema");
const html = document.documentElement;
const temaEscuroTexto = html.lang === "en" ? "Light mode" : "Modo claro";
const temaClaroTexto = html.lang === "en" ? "Dark mode" : "Modo escuro";

if (localStorage.getItem("tema") === "dark") {
  html.setAttribute("data-theme", "dark");
  if (btnTema) btnTema.textContent = temaEscuroTexto;
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      localStorage.removeItem("tema");
      btnTema.textContent = temaClaroTexto;
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("tema", "dark");
      btnTema.textContent = temaEscuroTexto;
    }
  });
}

document.querySelectorAll(".carrossel").forEach((carrossel) => {
  const viewport = carrossel.querySelector(".carrossel-wrapper");
  const slides = carrossel.querySelectorAll(".carrossel-item");

  carrossel.querySelectorAll(".carrossel-controle").forEach((button) => {
    button.addEventListener("click", () => {
      const positions = Array.from(slides, (slide) => slide.offsetLeft - slides[0].offsetLeft);
      const currentIndex = positions.reduce((nearestIndex, position, index) =>
        Math.abs(position - viewport.scrollLeft) < Math.abs(positions[nearestIndex] - viewport.scrollLeft)
          ? index
          : nearestIndex
      , 0);
      const direction = Number(button.dataset.direcao);
      const nextIndex = (currentIndex + direction + slides.length) % slides.length;

      viewport.scrollTo({
        left: positions[nextIndex],
        behavior: "smooth",
      });
    });
  });
});
