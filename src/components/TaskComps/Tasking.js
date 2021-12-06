const Tasking = ({item, data,updateData})=>{
    const {id, message} = item;
        const handleCompleteButton = (e) =>{
            console.log(e.target.name);
        }
        const deleteTask = async(location) =>{
            try {
                const result = await fetch(`http://localhost:5000/api/todos/${location}`, {
                    method: "DELETE"
                })
            updateData(data.filter( item =>item.id !== location));
            } catch(error){
                console.error(error.stack);
            }
        }
    return (
        <div className={"card"}>
            <h3> {message}</h3>
            <button name={"complete"} className={"blue"} onClick={e=>handleCompleteButton(e)}>Complete</button>
            <button name={"delete"} onClick={()=>deleteTask(id)}>Delete</button>
        </div>
    );
}

export default Tasking;