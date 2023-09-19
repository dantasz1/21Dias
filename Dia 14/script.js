perguntas()
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
novosalario = salario + (salario*aumento)

console.log("O nome dele é : " + nome)
console.log(" O salario é : " + salario)
console.log("O aumento de " + (aumento*100) + " % " )
console.log("Salario reajustado: R$ " + novosalario)

}
ReajusteSalarial()
function ReajusteSalarial () {
    resposta = prompt("Vc deseja calcular novamente??")
    if(resposta = "Sim"){

    }else{
        console.log("Programa acabou!")
    }
}
 