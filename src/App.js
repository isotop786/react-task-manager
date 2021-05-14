import axios from 'axios'
import './App.css';
import Header from './components/Header' 
import Task from './components/Task'
import {useState,useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {

  const [task,setTask] = useState([])

  const [showAdd, setShowAdd] = useState(false)

    useEffect(()=>{
      // axios.get('http://localhost:3000/tasks')
      // .then((res)=>{
      //   // console.log(res)
      //   setTask(res.data)
      // })

      const getTasks = async ()=>{
        const taskFromServer = await fetchTask()
        setTask(taskFromServer)
      }

      getTasks()

      console.log(task)
    },[])

    const fetchTask = async ()=>{
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      return data
    }

  // fetching single task
  const fetchSingleTask = async (id)=>{
    const res = await fetch(`http://localhost:3000/tasks/${id}`)

    const data = await res.json()

    return data
  }



  // add task 
  const addTask =  (ts)=>{
    // const id = Math.floor(Math.random()*10000+1)

    // const newTask = {id, ...ts}
    // setTask([...task,newTask])

    axios.post('http://localhost:3000/tasks',ts)
    .then(res=>{ console.log(res)
    
      setTask([...task, ts])
    
    })
    .catch(err => console.log(err))

    console.log(task)
  }


  const deleteTask = (id)=>{
    // console.log('task deleted ',id)
    axios.delete(`http://localhost:3000/tasks/${id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    setTask(task.filter((task) => task.id !== id))
  }

  const onToggle = async (id)=>{
    // console.log(id)
    const toggleTask = await fetchSingleTask(id)

    const updateTask = await {...toggleTask, reminder: !toggleTask.reminder}

    const res = await fetch(`http://localhost:3000/tasks/${id}`,
      {
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      }
    )

    const data = await res.json();



    setTask(task.map((t)=> t.id == id ? {
      ...t,reminder:data.reminder
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
      <Header title="Task Manager" showAdd={showAdd}  onAdd={()=> setShowAdd(!showAdd)} />

     { showAdd && <AddTask addTask={addTask}/>}

    {task.length > 0 ?  <Task  tasks={task} onDelete={deleteTask}
      onToggle={onToggle} onProgress={onProgress}
    /> : (<div>
        <h3 style={{color:'red'}}>No Task to show</h3>
    </div>)}


     
    </div>
  );
}

export default App;
