import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Júnior" idade={20} bool="true"/>
            <DiretaFilho nome="Gabriel" idade={17} bool="false"/>
        </div>
    )
}