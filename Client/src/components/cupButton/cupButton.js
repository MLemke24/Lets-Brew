import React, { useState, useCallback } from "react";
//could use params here in the place of the data prop
import mug from "../../images/icons/Mug/1x/Mug.png";
import { hideInstructions } from "../../utils/wheel";
export default function App() {
  // const [num, setNum] = useState(1)
  const [count, setCount] = useState(0);

  const OnIncrementClick = useCallback(
    (e) => {
      setCount(count + 1);
    },
    [count]
  );

  const OnDecrementClick = useCallback(
    (e) => {
      setCount(count - 1);
    },
    [count]
  );

  return (
    <div>
      <img id="mug" src={mug} alt="mug" />
      <div className="DisplayDiv">
        <h4>How many cups?</h4>
        <div>{count}</div>
      </div>
      <div className="ButtonDiv">
        <div onClick={OnIncrementClick} className="cup-sel">
          <div className="btntext">+</div>
        </div>
        <div onClick={OnDecrementClick} className="cup-sel">
          <div className="btntext">-</div>
        </div>
        <button onClick={hideInstructions}>Enter</button>
      </div>
    </div>
  );
}
