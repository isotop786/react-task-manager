import logo from './logo.svg';
import './App.css';
import Header from './components/Header' 
import Task from './components/Task'
import {useState} from 'react'

function App() {

  const [task,setTask] = useState(
    [
                  {
                      id:1,
                      text:'Tasks comming from global state',
                      day:'Feb 5th at 2:30pm',
                      reminder:true,
                      onProgress:false
                  },
                  {
                      id:2,
                      text:'Meeting with client',
                      day:'Feb 5th at 2:30pm',
                      reminder:true,
                      onProgress:false
                  }
                  ,
                  {
                      id:3,
                      text:'Hair cuts and growming',
                      day:'Feb 5th at 2:30pm',
                      reminder:false,
                      onProgress:false
                  },
                  {
                      id:4,
                      text:'Meeting classmate',
                      day:'Feb 5th at 2:30pm',
                      reminder:true,
                      onProgress:false
                  }
              ]
  )

  const deleteTask = (id)=>{
    // console.log('task deleted ',id)
    setTask(task.filter((task) => task.id !== id))
  }

  const onToggle = (id)=>{
    // console.log(id)
    setTask(task.map((t)=> t.id == id ? {
      ...t,reminder:!t.reminder
    }: t))
  }

  const onProgress = (id)=>{
    // alert('wokring')

    setTask(task.map((t)=>{
     return  t.id === id ? {...t, onProgress:!t.onProgress} : t

    }
    ))
  }


  return (
    <div className="container">
      <Header title="Task Manager"/>

    {task.length > 0 ?  <Task  tasks={task} onDelete={deleteTask}
      onToggle={onToggle} onProgress={onProgress}
    /> : (<div>
        <h3 style={{color:'red'}}>No Task to show</h3>
    </div>)}


     
    </div>
  );
}

export default App;
