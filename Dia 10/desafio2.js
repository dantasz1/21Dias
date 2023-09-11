const numero = parseInt(prompt("Insira um numero inteiro positivo"))
const array = []

if (numero <= 0) {
    alert("Apenas numeros positivos!")
} else {
    array.push(numero - 1)
    array.push(numero)

    for (let o = 1; o < 9; o++) {
        array.push(array[o] + array[o - 1])
    }
    
    console.log(array)
}



