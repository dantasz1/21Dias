continuar = true
let confirmar = true
while(continuar){
nome = prompt("Insira seu nome")
idade = parseInt(prompt("Insira sua Idade"))
salario= parseInt(prompt("Insira seu salario"))

confirmar = prompt ("As informaçoes estao corretas? s/n")
if(confirmar == "s") {
console.log("Parabens")
continuar = false
} else {
   confirmar != "s" 
   console.log("Informe suas informaçoes novamente!")
}
}
let salario = 0; 

