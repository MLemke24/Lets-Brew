import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FRENCHPRESS } from '../../utils/queries';
import cupButton from '../cupButton/cupButton'

// create the BrewSpecs function to export our component
// use state to dynamically change the instruction values 
// use the QUERY_BREW to pass our data into our state 
const BrewSpecs = () => {
  const [brew] = useQuery(QUERY_FRENCHPRESS)
  // const [cupSize, setCupSize] = useState('')
  // const [grindSize, setGrindSize] = useState(1)
  // const [coffeeAmount, setCoffeeAmount] = useState(1)
  // const [water, setWater] = useState(1)
  const [brewData, setBrewData] = useState({cupSize: '', grindSize: '', coffeeAmount: '', water: ''})

  const renderData = useEffect(() => {
    if(brew && brew.brew._id) {
      // setCupSize(brew.brew.cupSize)
      // setGrindSize(brew.brew.grindSize)
      // setCoffeeAmount(brew.brew.coffeeAmount)
      // setWater(brew.brew.water)
      setBrewData(brew.brew)
    }
  })

  return (
    <div>
      <p>{brewData.cupSize}</p>
      <p>{brewData.grindSize}</p>
      <p>{brewData.coffeeAmount}</p>
      <p>{brewDat.water}</p>
      <cupButton onChange={renderData()} />
    </div>
  )
}

export default BrewSpecs;
