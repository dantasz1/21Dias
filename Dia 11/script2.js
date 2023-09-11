modelos = []
anos = []
valores = []
continuar = true
while (continuar) {
    modelos = prompt("Qual o modelo do seu carro?")
    anos = prompt("Qual é ano é o seu carro?")
    valores = prompt("Quanto custa o seu carro?")
    continuar = prompt("Vc deseja continuar? sim para continuar!")
if(continuar != "sim"){
alert("Ate mais!")
continuar = false
}
}