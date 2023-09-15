class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }
    DefinirVencedor() {
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]
        for (let index = 0; index < this.Participantes.length; index++) {
            tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }



ExibirVencedor(){
    alert(" O vencedor é : " + this.Vencedor.Nome)
}

}
let propriedadesCarros = new Corrida("Paris", "Formula 1 ", 1000)
Corrida.Participantes[0] = new carro("Brasil" , 210, 200, 9)
Corrida.Participantes[1] = new carro("Marea" , 200 , 150 , 8)
Corrida.Participantes[2] = new carro("Pejo 206" , 300 , 22)
Corrida.DefinirVencedor()
Corrida.ExibirVencedor()