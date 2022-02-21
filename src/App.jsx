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

import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"

import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"

import DiretaPai from "./components/comunicacao/DiretaPai"

import IndiretaPai from "./components/comunicacao/IndiretaPai"

import Input from "./components/formulario/Input"

import Contador from "./components/contador/Contador"

import Fatorial from "./components/contador/Fatorial.jsx"

import Mega from "./components/mega/Mega"

export default _ => 
    <div className="App">

        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#13 - Sorteador Mega-Sena" color="#FF2985"> 
                <Mega qntde={6}/>
            </Card>

            <Card titulo="Calculadora Fatorial"> 
                <Fatorial>
                    <input id="input"></input>
                </Fatorial>
            </Card>

            <Card titulo="#12 - Contador" color="#FCC600"> 
                <Contador numeroInicial= {0} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#FFC300"> 
                <Input/>
            </Card>

            <Card>
                <p id="countdown">25:00</p>
                <script src="Countdown.js"></script>
            </Card>


            <Card titulo="#10 - Comunicação Indireta" color="#CC1421">
                <IndiretaPai></IndiretaPai>
            </Card>
            
            <Card titulo="#09 - Comunicação Direta" color="#BB2985">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização condicional" color="#FF2985">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                {/* <UsuarioInfo usuario={{}}/>
                <UsuarioInfo /> */}
            </Card>

            <Card titulo="#07 - Exercício Repetição com map" color="#FF4835">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição utilizando map" color="#FF4C65">
                <ListaAlunos />
            </Card>

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