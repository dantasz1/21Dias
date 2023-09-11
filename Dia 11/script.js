let nomeAlunos = []
let notas = []
MgGeral = 0;
continuar = true

while (continuar) {
    nomeAlunos = prompt("Qual seu nome?")
    notas = parseInt(Number(prompt("qual foi sua nota da prova?")))
    continuar = prompt("Vc deseja continuar?? para sim, digite 1")

    if (continuar !== "1") {
        alert("Paramos por aqui!")
        continuar = false
    }
}
MgGeral= MgGeral + notas

console.log(" A media geral é: " + MgGeral)
