import React, {useState} from "react";
import "./Contador.css";

export default (props) => {

    const [resultado, setResult] = useState(2)
    const [numero, setFatorial] = useState('2' || 2)

    function fatorial() {

        let n = document.getElementById('input').value

        let resultado =  n;

        if (n < 0) {
            resultado = "Inexistente"
            document.getElementById('resultado').innerHTML = resultado;
        }

        if (n == 0 || n == 1) {
            resultado = 1;
            document.getElementById('resultado').innerHTML = resultado;
        }

        while(n > 1) {
            n = n - 1;
            resultado = resultado * n;
            document.getElementById('resultado').innerHTML = resultado;
        }

    }

    return(
        <div className="Fatorial">
            <h3>Insira um número</h3>
            <input id = 'input' type="number" value={resultado} onChange={e => {
                    setResult(+e.target.value)
                    setFatorial(fatorial(+e.target.value))
                }}></input>
            <p id="resultado"></p>
            <button onClick={fatorial}>Calcular !</button>
        </div>
    )
}