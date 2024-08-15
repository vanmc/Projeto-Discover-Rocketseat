function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //ou
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //caso fosse trocar de imagem:
  // const img = document.querySelector('#profile img')
  // if (html.classList.contains('light')) {
  //   img.setAttribute('src', './assets/avatar.png')
  // } else {
  //   ... (local diferente)
  // }
}

//No JS:
//Os objetos no JavaScript são estruturas de dados que podem armazenar propriedades e métodos.
//As funções no JavaScript são um bloco de código que pode ser chamado em outras partes do programa e reaproveitar código.
