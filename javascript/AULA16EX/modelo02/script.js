let list = document.getElementById ('fnum') 
let tab = document.getElementById('flista')
let res = document.getElementById('res')
let valores = [] //vetor 

function isNumero(n){ //essa função vai receber um numero 
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else {
            return false
        }
}

function inLista(n, l){ //essa função vai receber um numero e uma lista
        
            if(l.indexOf(Number(n)) != -1) { //se lista(l) for diferente(!=) de -1 indica que o valor nao foi encontrado na lista
                return true
        } else {
            return false
        }
}


function adicionar(){

 if( isNumero(list.value) && !inLista(list.value, valores)){ //1° vai analisar se é um numero e 2° vai ver se esta num array/lista
     valores.push(Number(list.value))
     let item = document.createElement('option') //cria uma tag para adicionar a tabela
     item.text = `Valor ${list.value} adicionado`  // adiona o valor a tabela 
     tab.appendChild(item) // adiona o valor a tabela
     res.innerHTML = '' //quando adicionar um novo valor ele limpa o resultado 


 } else {
     alert (`Valor invalido ou já encontrado! `)
 }

 //apaga/limpa o numero que foi adicionado na parte de adicionar
 list.value = ''
 list.focus()


}
 
function finalizar(n){

        if(valores.length == 0 ){
            alert('Digite um número antes de finalizar')
        }
            else{

                let tot = valores.length
                let maior = valores[0] //vai comçar a analisar o primeiro numero que for maior
                let menor = valores[0] //vai comçar a analisar o primeiro numero que for menor
                let soma = 0  //vai fazer as somas do numeros 
                let media = 0 //vai fazer a media dos numeros 

                for (let pos in valores){ //vai verificar um por um (numeros) para saber quem é o maior e menor numero
                    
                    soma += valores[pos] //faz a soma dos valores 
                   
                    
                    if(valores[pos] > maior )
                        maior = valores[pos]
                        if(valores[pos] < menor)
                            menor = valores[pos]
                            
                            
                    
                }

                
                media = soma / tot
                res.innerHTML = '' //limpa a tabela 
                res.innerHTML += `<p>A quantidade de numero na lista é ${valores.length} `
                res.innerHTML += `<p>O maior número na lista é ${maior}`
                res.innerHTML += `<p>O menor número na lista é ${menor}`
                res.innerHTML += `<p>Somando os números na lista o valor é ${soma}`
                res.innerHTML += `<p>A média dos números na lista é ${media}`
            }
    
}

    
