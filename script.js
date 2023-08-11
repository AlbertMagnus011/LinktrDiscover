function toggleMode() {
  const html = document.documentElement
  //pegar a tag img
  const img = document.querySelector("#profile img")
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  /*metodo que realiza a mesma verficação comentada acima*/
  html.classList.toggle("light")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos da Silva de oculos escuro na praia."
    )
  } else {
    //se tiver sem light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos da Silva de camisa estampada branca,chapéu e suspensório."
    )
  }
}
