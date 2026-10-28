const btnTema = document.getElementById("btn-tema");
const html = document.documentElement;

if (localStorage.getItem("tema") === "dark") {
  html.setAttribute("data-theme", "dark");
  if (btnTema) btnTema.textContent = "Modo claro";
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      localStorage.removeItem("tema");
      btnTema.textContent = "Modo escuro";
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("tema", "dark");
      btnTema.textContent = "Modo claro";
    }
  });
}
