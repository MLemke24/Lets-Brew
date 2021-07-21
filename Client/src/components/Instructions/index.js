//source :https://www.codegrepper.com/code-examples/javascript/react+filter+array+of+objects+by+name

import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "../Timer";
import Data from "../../db/tempdb";
import CupButton from '../cupButton/cupButton'
// import { AeroPress, BeeHouse, Chemex, FrenchPress, MokaPot, Siphon, V60, Wave } from '../Cards';
// make a button for notes? so you can share them???
/// make a button to add it to favorites????


const Instructions = () => {
  const { brewId } = useParams();
  const [cups, setCups] = useState(1)

  const onCupEnter = (numOfCups) => {
    setCups(numOfCups)
  }
  console.log(onCupEnter)

  return (
    <>
      {Data.filter((brew) => brew.name === brewId).map((filterBrew) => {
        return (
          <>
            <div id="showDiv" className="instruction-title">
              <h1> Brewing : {brewId} </h1>
              <CupButton onCupEnter={onCupEnter} />
            </div>

            <div id="hideDiv" style={{ display: 'none' }}>
              <div className="instruction-title">
                <Timer />
              </div>


              <div className="instruction-content">
                <div>
                  <div>
                    <h2>Strength : </h2>
                    <h4>{filterBrew.strength}</h4>
                  </div>
                  <h2>Volume:</h2>
                  <ul>
                    <li>
                      <div className="btmborder">
                        <span className="ingredients">WATER </span>
                        <span className="measurements">
                          {" "}
                          {filterBrew.water}
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="btmborder">
                        <span className="ingredients">GRIND </span>
                        <span className="measurements">
                          {" "}
                          {filterBrew.grind}
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="btmborder">
                        <span className="ingredients">COFFEE </span>
                        <span className="measurements">
                          {" "}
                          {filterBrew.weight}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="steps-content">
                  <h2>STEPS</h2>
                  <ul>
                    <li className="step-line-height">
                      <h4>Step One:</h4>
                      <p>{filterBrew.step1}</p>
                    </li>
                    <li className="step-line-height pad">
                      <h4>Step Two:</h4>
                      <p>{filterBrew.step2}</p>
                    </li>
                    <li className="step-line-height pad">
                      <h4>Step Three:</h4>
                      <p>{filterBrew.step3}</p>
                    </li>
                    <li className="step-line-height pad">
                      <h4>Step Four:</h4>
                      <p>{filterBrew.step4}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Instructions;
