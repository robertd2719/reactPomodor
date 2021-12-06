import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';
import {useEffect, useRef, useState} from "react";

momentDurationFormatSetup(moment)

const TimeRemaining = ({duration,setDuration}) => {
    const [seconds, setSeconds] = useState(duration);
    let intervalId = useRef(null);

    useEffect(() => {
        setSeconds(duration);
    }, [duration]);

    const handleStartStop = () => {
        intervalId.current = setInterval(() => {
            setSeconds(prev => {
                const nextTime = prev - 1;
                if (nextTime >=0){
                    return prev - 1;
                } else {
                    return prev;
                }
            });
        }, 1000)
    }

    const handleStopButton = () => {
        clearInterval(intervalId.current);
    }

    const handleResetButton = () =>{
        intervalId.current = null;
        setSeconds(25 * 60);
    }

    // we can use this to
    const formatTime = moment.duration(seconds, 's').format('mm:ss', {trim: false})
    return (
        <div>
            <h2>
                {formatTime}
            </h2>
            <br/>
            <button onClick={handleStartStop}>Start</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    )
}

export default TimeRemaining;