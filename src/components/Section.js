import React from 'react';
import HobbiesList from './HobbiesList';

const hobbies =['dibujar', 'bailar', 'ver anime'];

// hobbies.map(el => );

const Section=() => {
  return(
  <div>
    <p>Hola, soy una front-end developer de Laboratoria. Me encantan los retos y estoy aprendiendo React.</p>
    <ul>
      <HobbiesList hobbies={hobbies}/>
    </ul>
  </div>)
}

export default Section;