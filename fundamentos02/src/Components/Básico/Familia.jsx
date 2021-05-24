/*Guilherme Barbosa Lopes*/import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Jaya" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Fernanda" sobrenome="Bouvier" />
            <FamiliaMembro nome="João Victor" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Paulo" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Mirela" {...props} />
        </div>
    )
}