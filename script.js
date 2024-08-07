const badges = document.querySelectorAll('.sobre-conteudo span')

function changeBadgeColors (){
  badges.forEach((element, index) =>{
    setTimeout(
      function addClass(){
        element.classList.add('animate')
        badges[index-1].classList.remove('animate')
      }, index * 500
    )
  })
}
changeBadgeColors()
