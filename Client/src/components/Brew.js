import React, { useState } from 'react';
// import the correct query for retrieving data from the database

const BrewPage = () => {
  // const [cupSize, setCupSize] = useState=('')
  // const [grindSize, setGrindSize] = useState=('')
  // const [coffeeAmount, setCoffeeAmount] = useState=('')
  // const [water, setWater] = useState=('')
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
