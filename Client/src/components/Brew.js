import React, {useState} from 'react';

const BrewSpecs = ({ data }) => {
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
    setCupSize(data.cupSize)
    setGrindSize(data.grindSize)
    setCoffeeAmount(data.coffeeAmount)
    setWater(data.water)
  }

    return (
      <div>
        <p>{cupSize}</p>
        <p>{grindSize}</p>
        <p>{coffeeAmount}</p>
        <p>{water}</p>
        <button type="submit" onSubmit={renderData()}></button>
      </div>
  )
}

export default BrewSpecs;
