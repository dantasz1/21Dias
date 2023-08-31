altura = 0;
peso= 0;
peso = prompt("qual seu peso?")
altura = prompt("Qual sua altura?")
let imc = peso / (altura*altura)

if ( imc < 18.5 ){
console.log("Magreza")
}else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
}else if(imc >= 25 && imc <=30){
    console.log("Sobrepeso")
}else{
 console.log("obeso")
}


idade = prompt(" qual sua idade??")
AnoAtual = 2023
AnoQueNasc = AnoAtual - idade
console.log(" Voce nasceu no ano de: " + AnoQueNasc)