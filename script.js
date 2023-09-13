function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar1.png")
  }

  // pegar a tag alt
  const alt = document.querySelector("#profile img")

  // substituir o alt
  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro com fundo azul e lilás"
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de mayk brito, sorrindo e usando óculos de grau no fundo azul e lilás"
    )
  }
}

//   if(html.classList.contains('light'))
//     html.classList.remove('light')
//   } else {
//     html.classList.add('light')
//   }
// }
// classlist.contains = verifica a lista de classes no html (se contém)
// .remove = remove
// .add = adiciona
//  if else = se / se não
// toggle = maneira mais facil
