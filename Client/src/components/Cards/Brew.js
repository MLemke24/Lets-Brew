import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BREW } from '../../utils/queries';
import cupButton from '../cupButton/cupButton'

// create the BrewSpecs function to export our component
// use state to dynamically change the instruction values 
// use the QUERY_BREW to pass our data into our state 
const BrewSpecs = ({ data }) => {
    const [brew] = useQuery(QUERY_BREW)
    const [cupSize, setCupSize] = useState('')
    const [grindSize, setGrindSize] = useState(1)
    const [coffeeAmount, setCoffeeAmount] = useState(1)
    const [water, setWater] = useState(1)

    if(!data) {
      return 'No brew found'
    }

  // create a function to pass into a button (useEffect function)
  // the button will render the data in the return below
  const renderData = () => {
    setCupSize(brew.cupSize)
    setGrindSize(brew.grindSize)
    setCoffeeAmount(brew.coffeeAmount)
    setWater(brew.water)
  }

    return (
      <div>
        <p>{cupSize}</p>
        <p>{grindSize}</p>
        <p>{coffeeAmount}</p>
        <p>{water}</p>
        <cupButton onChange={renderData()}/>
      </div>
  )
}

export default BrewSpecs;
