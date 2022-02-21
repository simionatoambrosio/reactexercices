function gerarNumerosNaoContidos(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max +1 - min) + min)
    return array.includes(aleatorio) ? gerarNumerosNaoContidos(min, max, array) : aleatorio
}

function gerarNumeros(quantidade) {
    const numeros = Array(quantidade)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumerosNaoContidos(1, 60, nums)
        return [...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2)

    return numeros   
}

console.log(gerarNumeros(7))