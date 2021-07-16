import React from 'react';
import index from '../../../Server/Models/index';

const BrewPage = () => {
  return (
      <div>
        <p>{index.cupSize}</p>
        <p>{index.grindSize}</p>
        <p>{index.coffeeAmount}</p>
        <p>{index.water}</p>
      </div>
  )
}

export default BrewPage;
