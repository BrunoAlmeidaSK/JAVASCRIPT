//var num = [2,5,9,7] 
/*
num.push(6) // adiciona o valor na ultima posição
num.sort() //colocar os valores em ordem

console.log(`o vetor tem ${num.length} posições`) // mostra quantos valores possui o vetor
console.log(`o primeiro vetor é ${num[0]} `) // mostra qual é primeiro numero 
let pos = num.indexOf(7) //mostra a posição onde esta o numero indicado
if(pos == -1){
    console.log(`o numero não foi entrado`)
} else {
     console.log(`o valor esta na posição ${pos}`)
}*/

let array = ['b', 'P', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}