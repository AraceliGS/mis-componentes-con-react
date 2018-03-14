import React from 'react';

const HobbiesList = ({hobbies}) => {
  hobbies.map(el => {
    return <li>{el}</li>
  });
}

export default HobbiesList;