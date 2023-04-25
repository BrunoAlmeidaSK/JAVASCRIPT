function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('[ERRO] Falta de dados')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //faz limpar a tabuada para nao sobrepor numeros
        while(c <= 10){
            //cria a tabuada e adicionar dentro do select
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //faz a conta da tabuada com o valor add
            item.value = `tab${c}` //comando para selecionar 
            tab.appendChild(item) // add um elemento filho ao select
            c++
        }
    }

}