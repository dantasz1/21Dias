let dividendo = 0
let continuar = true
let Saque = 0
let Deposito = 0
let SaldoTotal=0
let MaiorValor =0
let MgValor = 0;
while(continuar == 1){
    nome = prompt("Qual seu nome?")
    cpf = prompt("Insira seu CPF")
    QualquerValor = Number (prompt("Insira um Valor"))
    SaqueouDeposito = prompt("Saque ou Deposito?")
    if(SaqueouDeposito == "Saque"){
        (SaldoTotal= SaldoTotal - QualquerValor)
        
    }else if(SaqueouDeposito == "Deposito"){
        (SaldoTotal= SaldoTotal+ QualquerValor)
        
    }

    if ( QualquerValor > MaiorValor) {
        MaiorValor = QualquerValor
    }
    
    continuar =  Number (prompt ("Voce quer continuar?? 1 para sim, 2 para não"))
if (continuar !== 1) {
    continuar == 2  
}

MgValor = MgValor + QualquerValor
dividendo++


}
console.log(" Meu saldo é " + SaldoTotal)
console.log(" O maior valor inserido é o: " + MaiorValor)
console.log("A media é: " + MgValor/dividendo)
    
    
    
    
 















