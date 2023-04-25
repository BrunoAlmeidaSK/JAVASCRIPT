var agora = new Date()
var data = agora.getDay()

/*
    0-domingo
    1-Segunda
    2-Terça
    3-Quarta
    4-Quinta
    5-sexta
    6-sabado
*/
console.log(`Hoje é dia ${data}`)

switch(data){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
        default: 
        console.log('Dia invalido')
}