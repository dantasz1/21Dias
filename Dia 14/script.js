var nome
var salario
function perguntas(){
    nome = prompt("Insira seu nome")
    salario = parseFloat(prompt("Qual seu salario?"))
    CalcularSalario(nome, salario)
}
function CalcularSalario(nome, salario) {
    var aumento = 0

if (salario < 1500) {
    aumento = 0.2
}else if (salario <= 2000) {
    aumento = 0.15
}else if(salario <= 3000 ){
    aumento = 0.10
}else{
    aumento = 0.05
}






}
 