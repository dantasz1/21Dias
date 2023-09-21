
let nomes = []
let senhas = []


function Perguntas () {
    let cadastros = prompt("| 1- Se vc deseja cadastrar | 2- Para fazer LOGIN | 3- Excluir um cadastro | Encerrar o cadastro")
   return cadastros
}
cadastroUsuario()
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