import React, {useState } from 'react';
// source: https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
const Timer = (props) => {
    return (
        <div className="timer">
      <span className="digits minutes">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits seconds">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
      );
}

const ControlButtons = (props) => {
    const StartButton = (
        <div className="btn btn-one btn-start"
             onClick={props.handleStart}>
          Start
        </div>
      );
      const ActiveButtons = (
        <div className="btn-grp">
          <div className="btn btn-two" 
               onClick={props.handleReset}>
            Reset
          </div>
          <div className="btn btn-one" 
               onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
          </div>
        </div>
      );
      
      return (
        <div className="Control-Buttons">
          <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
      );
}

const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </div>
    );
}

export default StopWatch

