let idade = Number(prompt("Insira sua idade"))
nome = prompt ("Insira seu Nome")
if(idade === 18 && nome ==="André"){
    console.log("Seu nome é André E voce tem 18 anos")
}
if(idade === 18 || nome=== "André"){
    console.log( "Vc tem 18 anos OU seu nome é André")
}else{
console.log("Seu nome nao é Andre e vc nao tem 18 anos")

}
// (&&) - E |  (||)- OU | else if = (se nao se)