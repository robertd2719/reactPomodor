import {useState} from "react";

let intervalId;

const Timer = () => {
    const [minutes, updateMinutes] = useState(0);
    const [seconds, updateSeconds] = useState(0);

    let minutesDisplay = (minutes < 9) ? "0" + minutes.toString() : minutes.toString();
    let secondsDisplay = (seconds < 9) ? "0" + seconds.toString() : seconds.toString();

    const incrementDecrementMinutes = value => {
        updateMinutes(prevValue => prevValue + value);
    }

    const incrementDecrementSeconds = value => {
        updateSeconds(prevValue => prevValue + value);
    }

    const setTimerLongShortMedium = value => {
        updateMinutes(value);
        updateSeconds(0);
    };

    const counter = () => {
        console.log(`minutes: ${minutes} seconds: ${seconds}`);
        if (minutes == 0 && seconds === 0) {
            clearInterval(intervalId);
            alert("Time cycle has completed");
        } else if (minutes > 1 && seconds === 0) {
            updateMinutes(prev => prev - 1);
            updateSeconds(59);
        } else {
            updateSeconds(prev=>prev -1 );
        }
    }

    return (
        <>
            <h1>Timer</h1>
            <h2>{minutesDisplay}:{secondsDisplay}</h2>
            <button onClick={() => setTimerLongShortMedium(25)}>25 MINS</button>
            <button onClick={() => setTimerLongShortMedium(15)}>15 MINS</button>
            <button onClick={() => setTimerLongShortMedium(5)}>BREAK</button>
        </>
    );
}

export default Timer;