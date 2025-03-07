function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#Perfil img")

  html.classList.toggle("Light")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "/assets/avatar.png")
  }
}
