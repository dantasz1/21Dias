const array = []  
let tamanho = 0

tamanho = parseInt(prompt("Quantos numeros voce deseja inserir no array?"))
console.log(array.length)

while (array.length < tamanho) {  
    let numero = prompt("Qual numero voce deseja inserir??")

    array.push(numero)

}
console.log(array)
const arrayReverse = array.reverse()


console.log(arrayReverse)
