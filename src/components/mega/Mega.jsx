import React, { useState } from "react";
import './Mega.css';

export default props => {
    function gerarNumerosNaoContidos(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
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

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)


    return (
        <div className="Mega">
            <h3>{numeros.join(' ')}</h3>

            <div>
                <p>Quantidade de Números:</p>
                <input min="1" max="60" required type="number" value={qtde} onChange={e => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}
                />
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Sortear Números
            </button>
        </div>
    )
}