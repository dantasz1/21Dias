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

let aumento = 1.5; 
console.log("previsao salarial para os proximos 10 anos:")
for(i = 1; i <= 10; i++){
   salario += salario * aumento
   aumento *= 2
   console.log((2023 + i) + " = R$ " + salario)
}



