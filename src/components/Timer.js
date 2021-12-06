import {useState} from "react";

const Timer = () =>{
    const [minutes, updateMinutes] = useState(0);
    const [seconds, updateSeconds] = useState(0);

    let minutesDisplay = (minutes<9) ? "0"+minutes.toString() : minutes.toString();
    let secondsDisplay = (minutes<9) ? "0"+seconds.toString() : seconds.toString();

    const incrementDecrementMinutes = value =>{
        updateMinutes(prevValue =>prevValue + value);
    }

    const incrementDecrementSeconds = value =>{
        updateSeconds(prevValue =>prevValue + value);
    }

    return (
        <>
            <h2>TIMER: {minutesDisplay}: {secondsDisplay}</h2>
            <h3>Minutes Buttons</h3>
            <button onClick={()=>incrementDecrementMinutes(1)}>increment</button>
            <button onClick={()=>incrementDecrementMinutes(-1)}>decrement</button>
            <h3>Seconds Buttons</h3>
            <button onClick={()=>incrementDecrementSeconds(1)}>increment</button>
            <button onClick={()=>incrementDecrementSeconds(-1)}>decrement</button>
        </>
    );
}

export default Timer;