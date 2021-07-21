import React, { useState, useCallback } from "react";
//could use params here in the place of the data prop

import mug from "../../images/icons/Mug/1x/Mug.png";
import { hideInstructions } from "../../utils/wheel";

export default function App(props) {
  // const [num, setNum] = useState(1)
  const [cups, setCups] = useState(1);


  const OnIncrementClick = useCallback((e) => {
    if (cups < 6) {
    setCups(cups + 1);
    } else if (cups === 6) {
      alert('cannot brew more than 6 cups')
    }
  }, [cups])
  
  const OnDecrementClick = useCallback((e) => {
    if (cups > 1) {
    setCups(cups - 1);
    } else if (cups === 1){
      alert('Please select valid cup size')
    }
  }, [cups])


  return (
    <div>
      <img id="mug" src={mug} alt="mug" />
      <div className="DisplayDiv">
        cupButton
        <p>Counter</p>
        {cups}
      </div>
      <div className="ButtonDiv">
        <div onClick={OnIncrementClick} className="Button">Increment</div>
        <div onClick={OnDecrementClick} className="Button">Decrement</div>
        <button onClick={(event) => { hideInstructions(); props.onCupEnter(cups);}}>Enter</button>
        
      </div>

    </div>
  );
}


