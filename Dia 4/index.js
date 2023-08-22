let  questionUsuarioFome =prompt ("Voce esta com Fome?? Sim/Não")
let questionUsuarioMoney =prompt("Voce tem dinheiro?? Sim/Não")
let local =prompt("O Restaurante esta aberto?? Sim/Não")

if(questionUsuarioFome =="Sim" && questionUsuarioMoney=="Não"){
console.log("Hoje a janta sera em casa")
}else if (questionUsuarioFome =="Sim" && questionUsuarioMoney == "Sim" && local =="Não") {
console.log("Peça um delivery.")
}else if(questionUsuarioFome =="Sim" && questionUsuarioMoney =="Sim" && local =="Sim"){
    console.log("Hoje a janta sera no seu restaurante preferido")
}

    






   
