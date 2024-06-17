

const Board = ({todo, index, taskList, setTaskList}) => {

    // tenho que entender por que que precisa de indexOf achar o item ao invés de só usar o index diretamente
    const deleteTask = () => {
        console.log(`Index = ${index}`)
        setTaskList(taskList.splice(index,1))
        console.log(taskList)
    }

    return(
        <>
        <li>{todo}</li>
        <button onClick={deleteTask}>Delete</button>        
        </>
    )
}

export default Board;