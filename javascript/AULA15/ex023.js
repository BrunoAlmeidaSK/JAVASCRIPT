var num = [5,8,4,3]

/*
for(let pos = 0; pos < num.length; pos++){ // pos iniciar na posição 0, enquanto pos for menos que o tamanho do vetor, o pos vai receber mais um 
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num ){ // para cada posição em num , vai mostrar cada posição 
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
    
}