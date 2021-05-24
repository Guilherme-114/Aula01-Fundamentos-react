// Guilherme Barbosa Lopes 

import React from 'react';

export default function Propriedades(props) {
    return(
        <div>
            <h3>{ props.nome } { props.sobrenome }</h3>
            <h3>{ props.idade }</h3>
        </div>
    )
}