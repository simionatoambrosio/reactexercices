import React from "react";
import alunos from '../../data/alunos'

export default (props) => {

    const alunosLI = alunos.map(aluno => {
        return <li key={aluno.id}> {aluno.id}) {aluno.nome} ➝ {aluno.nota} </li>
    });

    return(
        <div>
            <h2 style={{textAlign: 'center'}}>Lista Alunos</h2>
            <ul style={{listStyle: 'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}