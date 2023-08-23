let InforNome =prompt("Insira seu Nome!") 
let InforIdade =prompt("Insira sua Idade!")
let InforCart =prompt("Voce possui carteira de motorista? | Sim/Não")
let InforCar = prompt("Voce tem algum carro? | Sim/Não")
if(InforIdade == "Não" || InforCart == "Não"){
    console.log("André, voce não pode dirigir.")
    console.log("Voce tem Menos ou tem 18 anos")
    InforIdade <=18} || InforIdade=>=18
else{
    console.log("Voce nao tem carteira ou idade")
}
    
    


if(InforIdade == "Sim" && InforCart == "Sim" && InforCar == "Não"){
console.log("André, voce pode dirigir mas não tem um carro.")
}else if (InforIdade == "Sim" && InforCart == "Sim"&& InforCar == "Sim") {
    console.log("André, voce sera o motorista!.")
}



    






   
