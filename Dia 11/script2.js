continuar = true
modelo = []
ano = []
valor = []
posicaoArray = []

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








        
    }
    
}

}



console.log("ordenar os carros pelo preço: ")
for (let i = 0; i < modelo.length; i++) {
    console.log(modelo[i] + " - " + ano[i] + " - " + valor[i])
    
}