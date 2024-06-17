import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  const[taskList, setTaskList] = useState([])

  console.log(taskList)

  return (
    <div className="App">
      <Input
      taskList={taskList}
      setTaskList={setTaskList}
      />
      <div>
        <ul>
          {taskList.map((todo, index) => <Board
          todo={todo}
          key={index}
          index={index}
          setTaskList={setTaskList}
          taskList={taskList}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
