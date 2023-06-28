import { Header, AddTask, ShowTask } from './components'
import { useState } from 'react'
import {  Task } from './types/types';
import './App.css'

function App() {
  const storedTask = localStorage.getItem('tasklist');
  const tasks = storedTask ? JSON.parse(storedTask) : [];
  const [tasklist, setTasklist] = useState<Task[]>(tasks);
  const [task, setTask] = useState<Task>({
    id: 0,
    name: '',
    time: '',
  })

  return (
    <>
      <div className='App'>
        <Header />
        <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
        <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
      </div>
    </>
  )
}

export default App
