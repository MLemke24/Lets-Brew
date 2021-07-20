import React, { useState } from 'react'
//could use params here in the place of the data prop

const cupButton = ({ data }) => {
  // const [num, setNum] = useState(1)

  const handleNum = () => {
    setNum(data.id)
  }

  return (
    <input type="submit" onChange={handleNum}>{num}</input>
  )
}

export default cupButton;