class computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd


       
    }
    apresentarNoConsole(){
    console.log("Ola, o tipo do meu pc é :" + this.tipo + " processador " + this.processador + " placa " + this.video + " armazenamento de " + this.armazenamento + " memoria ram de " + this.memoriaRam + " e  " + this.ssd )
    }
}


let pc = new computador("Desktop" , "Ryzen 5 3600" , "Dedicado" , "1gb" , "16ram" , true )