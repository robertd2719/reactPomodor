import {useState} from "react";

const TaskEntry = ({data,updateData}) =>{
    const [tasking,updateTasking] = useState("");

    const handleSubmit = async (event) =>{
        if (tasking === ""){
            alert("Please enter a task....");
            return;
        }
        alert(`Task List updated, with :${tasking} `);
        try{
            const response = await fetch('http://localhost:5000/api/todos',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"message":tasking})
            });
            console.log(response);
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