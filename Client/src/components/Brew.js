import React, { useState } from 'react';

const BrewPage = () => {
  const [cupSize, setCupSize] = useState('')
  const [grindSize, setGrindSize] = useState(1)
  const [coffeeAmount, setCoffeeAmount] = useState(1)
  const [water, setWater] = useState(1)
  return (
      <div>
        <p>{cupSize}</p>
        <p>{grindSize}</p>
        <p>{coffeeAmount}</p>
        <p>{water}</p>
      </div>
  )
}

export default BrewPage;
