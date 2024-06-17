import { useState } from "react";

const Input = ({taskList, setTaskList}) => {
    const[input, setInput] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }

    return (
        <>
        <h1>Add a Task</h1>
        <form>
            <input
            type="text"
            placeholder="Write the current task here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ></input>
            <button onClick={addTask}>Add</button>
        </form>
        </>
    )
}

export default Input;