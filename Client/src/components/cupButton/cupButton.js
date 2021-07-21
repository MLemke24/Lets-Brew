import React, { useState, useCallback } from "react";
//could use params here in the place of the data prop
import mug from "../../images/icons/Mug/1x/Mug.png";
import { hideInstructions } from "../../utils/wheel";
import plus from "../../images/icons/plus.png"
import minus from "../../images/icons/minus.png"
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
    <div className="cupselection column">
      <img className="cuplogo" id="mug" src={mug} alt="mug" />
      <div className="DisplayDiv">
        <h4>How many cups?</h4>
        <div className="count">{count}</div>
      </div>
      <div className="ButtonDiv row">
        <div onClick={OnIncrementClick} className="">
        <img className="plus" src={plus} alt="plus"></img>
        </div>
        <div onClick={OnDecrementClick} className="">
        <img className="minus" src={minus} alt="minus"></img>
        </div>
        
      </div>
      <div className="cupbtn">
      <div onClick={hideInstructions} className="btn"> SUBMIT</div>
      </div>
    </div>
  );
}
