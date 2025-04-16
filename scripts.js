let botao = document.querySelector(".botao-menu")
let menu = document.querySelector(".menu")

botao.addEventListener("click", () => {
  menu.classList.toggle("ativo")
})

// const form = document.querySelector(".formulario-fale-conosco")
// const mascara = document.querySelector(".mascara-formulario")

// function mostrarFormulario() {
//   form.style.left = "50%"
//   form.style.transform = "translateX(-50%)"
//   mascara.style.visibility = "visible"
// }

// function esconderFormulario() {
//   form.style.left = "-309px"
//   form.style.transform = "translateX(0%)"
//   mascara.style.visibility = "hidden"
// }