//Guilherme Barboas Lopes 

import React, { useState } from 'react';


export default props => {

    const [nome, setNome] = useState('Jaya Lopes') 

    return(
        <div>
            <button onClick={() => {
                props.quandoClicar(nome)
            }} >
                Fornecer informações do Aluno
            </button>
        </div>
    )
}