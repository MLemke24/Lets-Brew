import React, { useState, useCallback } from 'react'
//could use params here in the place of the data prop
import mug from '../../images/icons/Mug/1x/Mug.png'
export default function App ()  {
  // const [num, setNum] = useState(1)
  const [count, setCount] = useState(0);

  const OnIncrementClick = useCallback((e) => {
    setCount(count + 1);
  }, [count])

  const OnDecrementClick = useCallback((e) => {
    setCount(count - 1);
  }, [count])

  return (
    <div>
      <img id='mug' src={mug} alt='mug' />
      <div className="DisplayDiv">
                <p>Counter</p>
                {count}
            </div>
            <div className="ButtonDiv">
                <div onClick={OnIncrementClick} className="Button">Increment</div>
                <div onClick={OnDecrementClick} className="Button">Decrement</div>
                <button>Enter</button>
            </div>
    </div>
  )
}
