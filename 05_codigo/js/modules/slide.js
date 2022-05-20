export default function initSlide(){
  const projects = [
    {
      id:1,
      img: "img-project-02.png",
      nome: "B B Beauty",
      url: "https://www.barbarabragionbeauty.com.br/principal.html",
      tipo: "website",
      texto: "Site desenvolvido para empresa de estética, utlizado para demostrar o portfólio, procedimentos e cursos que vendem",
      tecnologias: "HTML, CSS, JAVASCRIPT, PHP"
    },
    {
      id:2,
      img: "img-project.png",
      nome: "Nutrichef",
      url: "nutrichef.html",
      tipo: "layout",
      texto: "Design de uma landing page para empresa ficticia que vende marmitas congeladas por encomenda",
      tecnologias: "ADOBE XD, GIMP"
    },
    {
      id:3,
      img: "img-project-03.png",
      nome: "Jiu-Jitsu",
      url: "jiujitsu.html",
      tipo: "layout",
      texto: "Design de uma landing page para academia ficticia de jiu jitsu",
      tecnologias: "ADOBE XD, GIMP"
    },
    {
      id:4,
      img: "img-project-04.jpg",
      nome: "2 Fast",
      url:"https://gabrielbragion.github.io/",
      tipo: "website",
      texto: "Site desenvolvido para empresa ficticia de delivery, o site apresenta informações sobre a empresa e disponibiliza um mini app para fazer o orçamento do serviço utilizando uma API do google maps",
      tecnologias: "HTML, CSS, JAVASCRIPT"
    }
  ]
  const foto = document.querySelector("[data-slide='img']")
  const url = document.querySelector("[data-slide='url']")
  const nome = document.querySelector("[data-slide='titulo']")
  const texto = document.querySelector("[data-slide='descricao']")
  const tecnologias = document.querySelector("[data-slide='tecnologias']")
  const btnMais = document.querySelector("[data-slide='btn-prev']")
  const btnMenos = document.querySelector("[data-slide='btn-next']")
  
  let currentItem = 0
  
  window.addEventListener("DOMContentLoaded", function(){
    mostrarPessoa(currentItem)
  })
  btnMais.addEventListener("click", proximoItem)
  btnMenos.addEventListener("click", voltarItem)
  
  function mostrarPessoa(project){
    const item = projects[project]
    foto.src = item.img
    url.href = item.url
    nome.textContent = item.nome
    texto.textContent = item.texto
    tecnologias.textContent = item.tecnologias
  }
  function proximoItem(){
    currentItem++
    if (currentItem === projects.length){
      currentItem = 0
    }
    mostrarPessoa(currentItem)
  }
  function voltarItem(){
    currentItem--
    if (currentItem < 0){
      currentItem = projects.length -1
    }
    mostrarPessoa(currentItem)
  }
}