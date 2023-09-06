array = []


for (let i = 0; i <10; i++) {
    let numeroQualquer = parseInt( prompt("Digite o " + (i + 1) + " ° numero" ))
    array[i] = numeroQualquer
}

numeroInserido = prompt("Digite o numero que voce quer procurar no array (posição)")


for (let i = 0; i < array.length; i++) {
    if(array[i] == numeroInserido){
        console.log(i)
    }
}

    
