import {useRef, useState} from "react";

const StopWatch = () =>{
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () =>{
        //start button logic goes here
        setIsActive(true);
        setIsPaused(true);
        countRef.current = setInterval(()=>{
            setTimer((timer)=> timer + 1)
        }, 1000);
    }

    const handlePause = () =>{
        // Pause button logic goes here.
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleResume = () =>{
        // resume button logic goes here.
        // On resuming the timer will start the timer from where it was paused
        // and change the isPaused from false to true.
        setIsPaused(true)
        countRef.current = setInterval(()=>{
            setTimer((timer)=> timer + 1 )
        },1000)
    }

    const handleReset = () =>{
        // reset button logic here
        // Reset function will reset everything to its initial values. This button will not only
        // stop the counter but reset its value to 0.
        clearInterval(countRef.current)
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    }
    return(
        <div>
            <h3>React Stopwatch</h3>
            <p>{timer}</p>
            <div className="buttons">
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch;