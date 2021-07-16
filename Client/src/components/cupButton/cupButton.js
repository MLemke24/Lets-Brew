import React, { useState } from 'react' 

const cupButton = ({ data }) => {
  const [num, setNum] = useState(1)

  const handleNum = () => {
    setNum(data.id)
  } 

  return (
    <input type="submit" onChange={handleNum}>{num}</input>
  )
}

export default cupButton;