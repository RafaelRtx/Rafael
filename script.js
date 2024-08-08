//Selecionar as badges de decoração (HTML, CSS, JavaScript, TypeScript, NodeJs, SQL)
const badges = document.querySelectorAll('.sobre-conteudo span')

//código simples para criar uma animação nas "badges" ao carregar a página pela 1º vez
function changeBadgeColors (){
  badges.forEach((element, index) =>{
    setTimeout(
      function addClass(){
        element.classList.add('animate')
        badges[index-1].classList.remove('animate')
      }, index * 1000
    )
  })
}
changeBadgeColors()
