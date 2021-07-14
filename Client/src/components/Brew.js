import React, { useState } from 'react';
import CHEMEX from '../../../Server/Models/Chemex';

const BrewPage = () => {
  // const [cupSize, setCupSize] = useState=('')
  // const [grindSize, setGrindSize] = useState=('')
  // const [coffeeAmount, setCoffeeAmount] = useState=('')
  // const [water, setWater] = useState=('')
  return (
    CHEMEX.map(data => { 
      <div>
        <p>{data.cupSize}</p>
        <p>{data.grindSize}</p>
        <p>{data.coffeeAmount}</p>
        <p>{data.water}</p>
      </div>
    })
  )
} 

export default BrewPage;
