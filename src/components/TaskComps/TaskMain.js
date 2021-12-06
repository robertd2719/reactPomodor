import {useState, useEffect} from "react";
import Tasking from "./Tasking";
import TaskEntry from "./TaskEntry";

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
            <TaskEntry/>
            <h2>Task List</h2>
            {data.map(item => {
                return <Tasking key={item.id} item={item}/>
            })}
        </>
    )
}

export default TaskMain;