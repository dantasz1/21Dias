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
    if (hoteis.some(hotel => hotel.Id === idHotel)) {
        console.log("ID ja existe.Escolha outro ID")
        return
    }
    let objetoHotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(objetoHotel)
}
function CadastroReserva() {

    idHotel = prompt("digite o id do hotel")
    if (!hoteis.some(hotel => hotel.Id === idHotel)) {
        console.log("Id invalido. Por favor insira um Id valido")
        return;
    }
    nomeResponsavel = prompt("digite o nome do responsavel")
    DiaEntrada = prompt("Digite o dia da sua entrada em nosso hotel")
    DiaSaida = prompt("Digite o dia da sua saida em nosso hotel")
    if (DiaSaida < DiaEntrada) {
        console.log("O dia de entrada nao pode ser maior que o dia de saida!")
    }
    if (reservas.some(reserva => reserva.Id === idReserva)) {
        console.log("Esse id da reserva ja existe. Escolha outro Id")
        return ;
    }
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
    for (let i = 0; i < hoteis.length; i++) {
       if (idHotel == hoteis[i].Id) {
        hoteis[i].Telefone = telefone
       }
        
    }
}
let continuar = true
while (continuar) {
    

let opcao = prompt(" 1 - Para cadastrar | 2 - Para agendar sua reserva | 3 - Procurar reserva pelo ID | 4 - Procurar o hotel pela reserva" +
 "5- Procurar pelo nome | 6 - Procurar pela categoria | 7 - Procurar pelo telefone | 8 - Encerrar programa ")
switch (opcao) {
    case '1': 
        CadastroHotel()
        break;
case '2' : CadastroReserva()
        break;
case '3' : IdDoHotel(prompt("Digite o Id do hotel"))
        break;
case '4' : ProcurarHotelPelaReserva(prompt("Digite o Id da reserva"))
        break;
case '5' : Name(("Digite o nome do responsavel ")) 
        break;
case '6' : let AcharCategoriaHotel = Categorias(parseInt("Digite a categoria que deseja achar"))
console.log(AcharCategoriaHotel)
        break;  
case '7' : let idDoHotel = NumeroAndID("Digite o numero do id q deseja atualizar")
            let numero = prompt("digite seu novo telefone")
NumeroAndID(idDoHotel,numero)
        break;
case '8' : 
console.log("Programa encerrado")
        continuar = false
                break;
    default:

console.log("opçao invalida")
        break;
}
}
CadastroHotel() 
CadastroReserva()
IdDoHotel(1)
ProcurarHotelPelaReserva(1)
Name('andre')
Categorias(5)
NumeroAndID(1 , 12345)


