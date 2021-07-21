import React, { useState, useCallback } from "react";
//could use params here in the place of the data prop

import mug from "../../images/icons/Mug/1x/Mug.png";
// import { hideInstructions } from "../../utils/wheel";
export default function App(props) {
  // const [num, setNum] = useState(1)
  const [cups, setCups] = useState(0);


  const OnIncrementClick = useCallback((e) => {
    setCups(cups + 1);
  }, [cups])

  const OnDecrementClick = useCallback((e) => {
    setCups(cups - 1);
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
        <button>Enter</button>

      </div>
    </div>
  );
}
