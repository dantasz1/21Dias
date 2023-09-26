class Hotel {
    Id
    Nome
    Categoria
    Endereço
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereço = endereco
        this.Telefone = telefone
    }
}
class Reserva {
    Id
    IdDoHotel
    NomeDoResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, nomeResponsavel, entrada, saida) {
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
function CadastroHotel() {
    nome = prompt("digite o nome do hotel")
    categoria = prompt("Digite a categoria do hotel")
    endereco = prompt("Digite o endereço do hotel")
    telefone = prompt("Digite o telefone do hotel")
    let objetoHotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(objetoHotel)
}
function CadastroReserva() {

    idHotel = prompt("digite o id do hotel")
    nomeResponsavel = prompt("digite o nome do responsavel")
    DiaEntrada = prompt("Digite o dia da sua entrada em nosso hotel")
    DiaSaida = prompt("Digite o dia da sua saida em nosso hotel")
    let objetoReserva = new Reserva(idReserva, idHotel, nomeResponsavel, DiaEntrada, DiaSaida)
    idReserva++
    reservas.push(objetoReserva)
}

function IdDoHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdDoHotel) {
  //const filtroNomeHotel = hoteis.find((reserva) => reserva.Id == idHotel)
let i = idHotel - 1
            console.log("nome do hotel : "   + hoteis[i].Nome)
            console.log(`nome do responsavel é : ${reserva.NomeDoResponsavel}`)
            console.log(`dia de entrada é :  ${reserva.DiaEntrada}`)
            console.log(`dia de saida :  ${reserva.DiaSaida}`)
        }
    })
}
function ProcurarHotelPelaReserva(idReserva) {

            console.log(`nome do hotel ; ${ hoteis[idReserva - 1].Nome}`)
            console.log(`O endereço : ${hoteis[idReserva - 1].Endereço}`)
            console.log(`Dia de entrada : ${reservas[idReserva - 1].DiaEntrada}`)
            console.log(`Dia de saida : ${reservas[idReserva - 1].DiaSaida}`)
        
    }

function Name(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].NomeDoResponsavel) {
            console.log(" id da reserva : " + reservas[i].Id)
            console.log(" nome : " + reservas[i].NomeDoResponsavel)
        }

    }
}
function Categorias(categoria) {
    let categoriaHoteis = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            categoriaHoteis.push(hoteis[i].Nome)
        }
        return categoriaHoteis
    }
}
function NumeroAndID(idHotel, telefone){
    
}

CadastroHotel() 
CadastroReserva()
IdDoHotel(1)
ProcurarHotelPelaReserva(1)
Name('andre')
Categorias()