//Guilherme Barbosa Lopes 

import React, { Component } from 'react';
import './App.css'
import IndiretaPai from './Components/Básico/IndiretaPai';
import Estado from './Components/Básico/Estado';
import FamiliaClone from './Components/Básico/FamiliaClone';
import FamiliaMembroClone from './Components/Básico/MembroFamiliaClone';
import Familia from './Components/Básico/Familia';
import OlaMundo from './Components/Básico/OlaMundo';
import Propriedades from './Components/Básico/Propriedades';
import Card from './Components/layout/Card';

class App extends Component {
  render() {
   return (
     <div className="App" >
       <h1>Exemplos React</h1>

       <div className="Cards" >

       <Card titulo="Comunicação indireta (de filho pra pai)" cor='#f7673b'>
           <IndiretaPai />
         </Card>

       <Card titulo="Estado" cor='#ffb400'>
           <Estado />
         </Card>

         <Card titulo="Componentes aninhados (CloneElement)" cor='#82212e'>
           <FamiliaClone sobrenome="Lopes">
             <FamiliaMembroClone nome="Jaya" />
             <FamiliaMembroClone nome="Fernanda" />
             <FamiliaMembroClone nome="João Victor" />
             <FamiliaMembroClone nome="Paulo" />
             <FamiliaMembroClone nome="Mirela" />
           </FamiliaClone>
         </Card>

       <Card titulo="Componentes aninhados (Comunicação direta)" cor='#d1495b'>
           <Familia sobrenome="Lopes" />
         </Card>

         <Card titulo="Propriedades" cor='#91cb3e'>
           <Propriedades nome="Jaya" sobrenome="Lopes" idade={38}/>
         </Card>

         <Card titulo="Olá Mundo!" cor='#226ce0'>
           <OlaMundo />
         </Card>

      </div>
    </div>
   );
   }
}

export default App;
