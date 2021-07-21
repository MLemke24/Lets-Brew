import React, { useState, useCallback } from "react";
//could use params here in the place of the data prop

import mug from "../../images/icons/Mug/1x/Mug.png";
import { hideInstructions } from "../../utils/wheel";
import plus from "../../images/icons/plus.png"
import minus from "../../images/icons/minus.png"
export default function App(props) {

  // const [num, setNum] = useState(1)
  const [cups, setCups] = useState(0);


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
    <div className="cupselection column">
      <img className="cuplogo" id="mug" src={mug} alt="mug" />
      <div className="DisplayDiv">

        <h4>How many cups?</h4>
        <div className="count">{cups}</div>
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
      <button className='btn' onClick={(event) => { hideInstructions(); props.onCupEnter(cups);}}>Enter</button>

      </div>
    </div>
  );
}

