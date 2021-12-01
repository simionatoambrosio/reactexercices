import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

import './App.css'

import Card from './components/basicos/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Camera from "./components/basicos/layout/Camera"

export default _ =>
    <div className="App">

        

        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="Input Câmera" color="#133e7c">
                <Camera/>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                        <FamiliaMembro nome="Joana" ></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#133e7c">
                <Aleatorio min={5} max={25}> </Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#711c91">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#F24F00">
                <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={9.9}></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro" color="#19C5AF">
                <Primeiro />
            </Card>

        </div>

    </div>