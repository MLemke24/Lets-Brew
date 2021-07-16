import React from 'react';

const BrewPage = () => {
  return (
    query.map(data => {
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
