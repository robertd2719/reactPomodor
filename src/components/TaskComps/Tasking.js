const Tasking = ({item})=>{
    const {id, message} = item;
        const handleCompleteButton = (e) =>{
            console.log(e.target.name);
        }
    return (
        <div className={"card"}>
            <h3> {message}</h3>
            <button name={"complete"} className={"blue"} onClick={e=>handleCompleteButton(e)}>Complete</button>
            <button name={"delete"} onClick={e=>console.log(e.target.name)}>Delete</button>
        </div>
    );
}

export default Tasking;