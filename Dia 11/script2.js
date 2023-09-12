continuar = true
modelo = []
ano = []
valor = []
posicaoArray = 0;

while (continuar) {
    modelos = (prompt("Qual o modelo do seu carro?"))
    modelo[posicaoArray] = modelos

    anos = Number(prompt("Qual é ano é o seu carro?"))
    ano[posicaoArray] = anos


    valores = parseFloat(prompt("Quanto custa o seu carro?"))

    valor[posicaoArray] = valores
    posicaoArray++

    let desejaContinuar = prompt("Vc deseja continuar? (s/n)")
    if (desejaContinuar != "s") {
        alert("Ate mais!")
        continuar = false
    }
}
console.log(" O nome do carro é " + modelos)
console.log(" O ano do carro é : " + anos)
console.log(" O valor dos carros :" + valores)


let maiorValorModelo = []
let maiorValor = []
let maiorAno = []
for (let i = 0; i < valor.length - 1; i++) {
for (let ii = 0; ii < valor.length - 1 ; ii++) {
    if(valor[ii] > valor[ii + 1]){

    maiorValorModelo = modelo[ii]
    modelo[ii] = modelo[ii + 1]
    modelo[ii + 1] = maiorValorModelo

    maiorValor = valor[ii]
    valor[ii] = valor[ii + 1]
    valor[ii+ 1] = maiorValor

    maiorAno = ano[ii]
    ano[ii] = ano[ii + 1]
    ano[ii + 1] = maiorAno }
}
}

console.log("ordenar os carros pelo preço: ")
for (let i = 0; i < modelo.length; i++) {
    console.log(modelo[i] + " - " + valor[i] + " - " + ano[i])
    
}