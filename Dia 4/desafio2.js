let InforNome =prompt("Insira seu Nome!") 
let InforIdade =prompt("Insira sua Idade!")
let InforCart =prompt("Voce possui carteira de motorista? | Sim/Não")
let InforCar = prompt("Voce tem algum carro? | Sim/Não")

if(InforIdade  < 18 || InforCart == "Não"){
    console.log("André, voce não pode dirigir.")
}if(InforIdade >= 18 && InforCart == "Sim" && InforCar == "Não"){
console.log("Voce pode dirigir mas nao tem carro!")
}if(InforIdade >= 18 && InforCart == "Sim"&& InforCar =="Sim"){
    console.log("André, voce sera o motorista!")
}


    

    // DESAFIO #2 | DIA 4!
    







    






   
