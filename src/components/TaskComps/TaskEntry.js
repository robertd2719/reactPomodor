import {useState} from "react";

const TaskEntry = () =>{
    const [tasking,updateTasking] = useState("");

    const handleSubmit = async (event) =>{
        alert(`${tasking} was updated`);
        try{
            const response = await fetch('http://localhost:5000/api/todos',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"message":tasking})
            });
        } catch(err){
            console.error(err.stack);
        }
    }

    return (
        <div>
            <input value ={tasking} type="text" name="" id="input_todo" onChange={e=>updateTasking(e.target.value)}/>
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}
export default TaskEntry;