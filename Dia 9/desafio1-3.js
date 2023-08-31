
AnoAtual = 2023; 
idade = prompt("Qual sua idade?")
AnoQueNasceu = AnoAtual - idade


for ( let i = 0 ; i < idade ; i++ ) {
     console.log( AnoQueNasceu + " - " + i + " anos de idade")
     AnoQueNasceu++
}