class carro{
Nome
Potencia
VelocidadeMaxima
Aceleracao

constructor(nome,potencia,velocidadeMaxima,aceleracao){
this.Nome = nome
this.Potencia = potencia
this.VelocidadeMaxima =velocidadeMaxima
this.Aceleracao = aceleracao
}

ApresentarInformacoes(){
    console.log("Informaçoes do carro: ")
console.log(`Nome: ${this.Nome}`)
console.log(`Potencia : ${this.Potencia} cavalos `)
console.log(`Velocidade maxima de : ${this.VelocidadeMaxima} KM/h`)
console.log(`Aceleração de ate : ${this.Aceleracao} ate 100 KM/h`)
}
CalcularTempoMedio(distancia){
    let resultado = (distancia) / this.VelocidadeMaxima /(this.Aceleracao)
    return resultado
    }
}
let classeCarros =new carro("Ferrari" , 800 , 320  , 2.5  )
classeCarros.ApresentarInformacoes()
let resultado = classeCarros.CalcularTempoMedio(1000)
console.log(resultado);


