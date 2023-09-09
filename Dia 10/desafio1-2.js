
array = []
for (let index = 0; index < 5; index++) {
    numerosAoUsuario = prompt("Digite o " + (index + 1) + " ° numero")
    array[index]  = numerosAoUsuario
}
console.log("array original " + array)

arrayInvertido = []
contador = 4;
for (let index = 0; index < 5; index++) {
    arrayInvertido[index] = array[contador];
    contador --


}
console.log( "O array invertido é " + arrayInvertido)