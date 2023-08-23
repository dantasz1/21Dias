let Num1 = Number(prompt("Insira o primeiro numero!"))
let num2 = Number(prompt("Insira o segundo numero!"))
let Operação = prompt("Insira uma operação: +,-,/,*")
switch (Operação) {
    case "+": 
     console.log(Num1 + num2)    
        break;
case"-":
console.log(Num1-num2)
        break;
case"/":
console.log(Num1/num2)
        break;
    case"*":
 console.log(Num1*num2)
        break;
    default:
        console.log("Escolha pelo menos uma opção!")
        break;
}
