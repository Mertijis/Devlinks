function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#Perfil img")
  const head = document.querySelector("#icon")

  if (html.classList.contains("Light")) {
    html.classList.remove("Light")
  } else {
    html.classList.add("Light")
  }

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "Assets/avatar-light.png")
    head.setAttribute("href", "Assets/avatar-light.png")
  } else {
    img.setAttribute("src", "Assets/avatar.png")
    head.setAttribute("href", "Assets/avatar.png")
  }
}
