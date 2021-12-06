import moment from 'moment';
import TimeRemaining from "./TimeRemaining";
import {useState} from "react";


const TimerTest = () => {
    const [duration, setDuration] = useState(60 * 25);

    // using the moment library will allow us to directly convert duration to mins

    return (
        <div>
            <TimeRemaining duration={duration} setDuration={setDuration}/>
            <br/>
        </div>
    )
}

export default TimerTest;