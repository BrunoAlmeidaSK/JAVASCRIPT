function Calcular(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    let n = Number(num.value)
   
    
    res.innerHTML += `<p> O seu valor absoluto é : ${Math.abs(n)}`
    res.innerHTML += `<p> A sua parte inteira é : ${Math.trunc(n)}`
    res.innerHTML += `<p> O valor inteiro mais próximo é: ${Math.round(n)}`
    res.innerHTML += `A sua raiz quadrada é ${Math.sqrt(n)}`
    res.innerHTML += `<p>A sua raiz cubica é ${Math.pow(n,3)}`
    
    

}