nomes = []
senhas = []
let continuar = true
contador = 0

while (continuar) {
    cadastro = prompt("Voce deseja cadastrar(1), fazer login(2), exluir um cadastro(3) ou encerrar o programa(4)?")

    switch (cadastro) {
        case "1": nomes[contador] = prompt("Qual seu nome?")
            senhas[contador] = prompt("Qual sua senha??")
            contador++
            break;
        case "2": let nome = prompt("Qual o nome?")
            let senha = prompt("Qual a senha?")
            let loginInvalido = false
            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginInvalido = true
                }
            }
            if (loginInvalido) {
                alert("Login feito com sucesso. Seja bem vindo!")
            } else {
                alert("Login ou senha incorreta!")
            }
case "3" : 
nomeExcluir = prompt("Qual nome voce deseja excluir?")
senhaAuxiliar = []
nomeAuxiliar = []
contadorAuxiliar = 0
for (let i = 0; i < contador.length; i++) {
    if (nomeAuxiliar == nomes[i]) {
    alert("cadastro excluido com sucesso!")
    } else{
        nomeAuxiliar[contadorAuxiliar] = nomes [i]
        senhaAuxiliar[contadorAuxiliar] = senhas [i]
        contadorAuxiliar++
    }
    
}
nomes = nomeAuxiliar
senhas = senhaAuxiliar
contador --
 break;
 case "4" :
    continuar = false
            default: 
           console.log("Opcao invalida, escolha outra!")
           alert("Escolha outra opção!")
    }
}