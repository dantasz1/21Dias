let MulherAcimade7 = 0
let NumeroDeHomens = 0
let QuantNotas = 0
let MgAlunos = 0
let continuar = true
let MaiorNotaHomens = 0
while (continuar) {
    nota = Number(prompt("Insira sua Nota"))
    sexo = prompt("Qual seu sexo? M/F")
        MgAlunos = MgAlunos + nota
    QuantNotas++
    if (sexo === "M") {
        NumeroDeHomens++

    }
    if (sexo === "F" && nota >= 7) {
        MulherAcimade7++



    } if (nota > MaiorNotaHomens) {
        nota = MaiorNotaHomens
    }

    continuar = prompt("Deseja cadastrar outra nota, se sim, digite S")
    if (continuar !== "S") {
        continuar = false
    }
}
console.log("A media geral dos alunos é: " + MgAlunos)
console.log("Foram " + NumeroDeHomens + " que enviaram as notas ")
console.log(" Foram " + MulherAcimade7 + " que tiveram nota acima de 7 ")
console.log(" A maior nota entre os homens foi: " + MaiorNotaHomens )























