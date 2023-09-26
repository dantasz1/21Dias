class Hotel{
    Id
    Nome
    Categoria
    Endereço
    Telefone
    constructor(id,nome,categoria,endereco,telefone){
this.Id = id
this.Nome = nome
this.Categoria = categoria
this.Endereço = endereco
this.Telefone = telefone
    }
}
class Reserva{
    Id
    IdDoHotel
    NomeDoResponsavel
    DiaEntrada
    DiaSaida
    constructor(id,idHotel, nomeResponsavel,entrada,saida){
this.Id = id
this.IdDoHotel = idHotel
this.NomeDoResponsavel = nomeResponsavel
this.DiaEntrada = entrada
this.DiaSaida = saida
    }
}
hoteis = []
reservas = []
let idHotel = 1
let idReserva = 1
function CadastroHotel () {
    nome = prompt("digite o nome do hotel")
    categoria = prompt("Digite a categoria do hotel")
    endereco = prompt("Digite o endereço do hotel")
    telefone = prompt("Digite o telefone do hotel")
    let objetoHotel = new Hotel (idHotel, nome , categoria , endereco,telefone)
    idHotel++
    hoteis.push(objetoHotel)
}
function CadastroReserva() {

id = prompt("digite o id do hotel")
nomeResponsavel = prompt("digite o nome do responsavel")
DiaEntrada = prompt("Digite o dia da sua entrada em nosso hotel")
DiaSaida = prompt("Digite o dia da sua saida em nosso hotel")
let objetoReserva = new Reserva (id,idHotel,nomeResponsavel, entrada , saida)
idReserva++
reservas.push(objetoReserva)
}
function IdDoHotel(idHotel) {
    reservas.forEach(x => {
        if (idHotel == objetoReserva.IdDoHotel) {
            
            console.log(`hotel :   ${x.Nome}` )
            console.log(`nome do responsavel é  ${x.nomeResponsavel}`)
            console.log(`dia de entrada é :  ${x.entrada}`)
            console.log(`dia de saida :  ${x.saida}`)
        }
    })
}
function ProcurarHotelPelaReserva(idReserva) {
    idReserva.forEach(x => {
console.log(`nome do hotel ; ${x.nome}`)
console.log(`O endereço : ${x.endereco}`)
console.log(`Dia de entrada : ${x.entrada}`)
console.log(`Dia de saida : ${x.saida}`)
    })
    }
function Name (nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].nomeResponsavel) {
            console.log("Id da reserva : " + reservas[i].Id)
        }
        
    }
}