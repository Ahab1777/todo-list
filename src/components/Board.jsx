

const Board = ({todo, index, taskList, setTaskList}) => {

    const deleteTask = () => {

        const newTaskList = [...taskList]; // Create a new array to avoid mutation
        newTaskList.splice(index, 1); // Remove the task from the new array
        setTaskList(newTaskList); // Update the state with the new array
       
    }

    return(
        <>
        <li>{todo}</li>
        <button onClick={deleteTask}>Delete</button>        
        </>
    )
}

export default Board;