import React, { useState } from "react";
import './Input.css';

export default (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div>
            <h2 style={{textAlign: 'center'}}>{valor}</h2>
            <div style={{
                display: 'flex', flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly></input>
                <input value={undefined} ></input>
            </div>
        </div>
    )
}