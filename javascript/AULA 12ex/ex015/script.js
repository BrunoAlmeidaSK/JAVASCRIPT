function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
  
    if(fano.value.length == 0 || fano.value > ano) /* verificar se foi digitado algo*/{
     alert(' [Erro] Verifique os dados e tente novamente! ')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img') //atribuindo img via js
      img.setAttribute('id', 'foto')
      
      if(fsex[0].checked) /*Verificar qual o genero escolhido*/{
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
            //crianças
            img.setAttribute('src', 'CriançaHomem.png')
        } else if(idade >=10 && idade < 21){
            //jovem
            img.setAttribute('src', 'JovemHomem.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'homemAdulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'HomemVelho.png')
        }
      } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'CriançaMulher.png')
        } else if(idade >=10 && idade < 21){
            //jovem
            img.setAttribute('src', 'JovemMulher.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'MulherAdlta.png')
        } else {
            //idoso
            img.setAttribute('src', 'VelhaMulher.png')
        }
      }

      res.style.textAlign = 'center' //centralizar texto via js
      res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
      res.appendChild(img)
   }

}