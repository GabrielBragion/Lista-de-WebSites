export default function initTabMenu(){

  //CARD 01
  const icones = document.querySelectorAll('[data-card="icone-01"]')
  const imgIcones = document.querySelectorAll('[data-card="img-01"]')
  const titulosIcones = document.querySelectorAll('[data-card="titulo-01"]')
  const descricaoCard = document.querySelector('[data-card="descricao-01"]')

  const textoCard = [
    {
      index: 0,
      titulo: "ADOBE XD",
      descricao: "Adobe XD é uma ferramenta de design de experiência do usuário baseada em vetores para aplicativos da web e aplicativos móveis, desenvolvida e publicada pela Adobe Inc."
    },
    {
      index: 1,
      titulo: "FIGMA",
      descricao: "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows."
    },
    {
      index: 2,
      titulo: "GIMP",
      descricao: "O GIMP possui os recursos para ser utilizado na criação ou manipulação de imagens e fotografias. Seus usos incluem criar gráficos, logotipos, redimensionar fotos, alterar cores, combinar imagens utilizando camadas, remover partes indesejadas e converter arquivos entre diferentes formatos de imagem digital."
    }
  ]

  imgIcones[0].classList.add("ativo")
  titulosIcones[0].classList.add("ativo")

  icones.forEach((icone,index) => icone.addEventListener("click", function(){
    ativaTab(index)
  }))

  function ativaTab(index){
    imgIcones.forEach(item => item.classList.remove("ativo"))
    imgIcones[index].classList.add("ativo")
    titulosIcones.forEach(item => item.classList.remove("ativo"))
    titulosIcones[index].classList.add("ativo")
    descricaoCard.textContent = textoCard[index].descricao
  }


  // CARD 02
  const icones02 = document.querySelectorAll('[data-card="icone-02"]')
  const imgIcones02 = document.querySelectorAll('[data-card="img-02"]')
  const titulosIcones02 = document.querySelectorAll('[data-card="titulo-02"]')
  const descricaoCard02 = document.querySelector('[data-card="descricao-02"]')

  const textoCard02 = [
    {
      index: 0,
      titulo: "CSS",
      descricao: "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web"
    },
    {
      index: 1,
      titulo: "HTML",
      descricao: "HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: 'Linguagem de Marcação de Hipertexto' é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."
    },
    {
      index: 2,
      titulo: "JS",
      descricao: "É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da internet. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web."
    }
  ]

  imgIcones02[1].classList.add("ativo")
  titulosIcones02[1].classList.add("ativo")

  icones02.forEach((icone,index) => icone.addEventListener("click", function(){
    ativaTab02(index)
  }))

  function ativaTab02(index){
    imgIcones02.forEach(item => item.classList.remove("ativo"))
    imgIcones02[index].classList.add("ativo")
    titulosIcones02.forEach(item => item.classList.remove("ativo"))
    titulosIcones02[index].classList.add("ativo")
    descricaoCard02.textContent = textoCard02[index].descricao
  }

  //CARD 03
  const icones03 = document.querySelectorAll('[data-card="icone-03"]')
  const imgIcones03 = document.querySelectorAll('[data-card="img-03"]')
  const titulosIcones03 = document.querySelectorAll('[data-card="titulo-03"]')
  const descricaoCard03 = document.querySelector('[data-card="descricao-03"]')

  const textoCard03 = [
    {
      index: 0,
      titulo: "SQL",
      descricao: "É um sistema gerenciador de Banco de dados relacional desenvolvido pela Sybase em parceria com a Microsoft. Esta parceria durou até 1994, com o lançamento da versão para Windows NT e desde então a Microsoft mantém a manutenção do produto."
    },
    {
      index: 1,
      titulo: "PHOTOSHOP",
      descricao: "Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems. É considerado o líder no mercado dos editores de imagem profissionais, assim como o programa de facto para edição profissional de imagens digitais e trabalhos de pré-impressão."
    },
    {
      index: 2,
      titulo: "REACT",
      descricao: "O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais."
    }
  ]

  imgIcones03[2].classList.add("ativo")
  titulosIcones03[2].classList.add("ativo")

  icones03.forEach((icone,index) => icone.addEventListener("click", function(){
    ativaTab03(index)
  }))

  function ativaTab03(index){
    imgIcones03.forEach(item => item.classList.remove("ativo"))
    imgIcones03[index].classList.add("ativo")
    titulosIcones03.forEach(item => item.classList.remove("ativo"))
    titulosIcones03[index].classList.add("ativo")
    descricaoCard03.textContent = textoCard03[index].descricao
  }
}
