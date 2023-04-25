function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     
    msg.innerHTML = `Agora são ${hora} horas .`
    if( hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha1.png'
        document.body.style.background = '#d4ae81'
    } 
    else  if( hora >= 12  && hora < 18){
        //BOA TARDE
        img.src = 'tarde1.png'
        document.body.style.background = '#c85e15'
    }
    else {
        //BOA NOITE
        img.src = 'noite1.png'
        document.body.style.background = '#6e3a31'
    }

}


