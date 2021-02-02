function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(quantidadeNumeros, tentativas=1) {
    try {
        const numeros = []
        for (let _ of Array(quantidadeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 100) {
            throw 'erro, em 100 tentativas não foi possível gerar os números'
        }
        else {
            return gerarMegaSena(quantidadeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)


// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)