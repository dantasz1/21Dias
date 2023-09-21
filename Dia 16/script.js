
let nomes = []
let senhas = []


function Perguntas () {
    let cadastros = prompt("| 1- Se vc deseja cadastrar | 2- Para fazer LOGIN | 3- Excluir um cadastro |4- Encerrar o cadastro")
   return cadastros
}

function cadastroUsuario () {
    nomes.push(prompt("digite seu nome para o cadastro"))
senhas.push(prompt("digite a senha que voce queria cadastrar"))
}

function FazerLogin(nome,senha) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false
    }
}
function ExclusaoCadastro(nome) {
    let indice = nomes.indexOf(nome)
if (indice !== -1) {
    nomes.splice(indice , 1)
    senhas.splice(indice , 1)
console.log("cadastro excluido")
}else{
    console.log("usuario nao encontrado")
}
}
let continuar = true
while (continuar) {
let opcao = Perguntas()
switch (opcao) {
    case "1":
        cadastroUsuario()
        break;
case "2" : 
let loginNome = prompt("digite seu nome")
let loginSenha = prompt("digite sua senha")
if (FazerLogin(loginNome, loginSenha)) {
    console.log("login feito com sucesso")
}else{
    console.log("nome ou senha incorretos")
}
break;
case "3" : 
let nome = prompt("insira seu nome")
ExclusaoCadastro(nome)
break;
case "4" : 
continuar = false

console.log("Encerrado com sucesso!")
    default:
        break;
} 
}