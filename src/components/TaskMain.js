import {useState, useEffect} from "react";
import Tasking from "./Tasking";

const TaskMain = () => {
    const [data, updateData] = useState([]);

    const fetchData = async () => {
        try {
            const result = await fetch('http://localhost:5000/api/todos');
            const readData = await result.json();
            updateData(readData);
            console.log(readData);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <h1>Task List</h1>
            {data.map(item => {
                return <Tasking item={item}/>
            })}
        </>
    )
}

export default TaskMain;