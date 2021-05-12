import SingleTask from './singleTask'

const Task = ({tasks,onDelete,onToggle,onProgress})=>{
    return(
        <>

      {tasks.map((task)=>{
          return(
              <SingleTask key={task.id} task={task} onDelete={onDelete}
                onToggle={onToggle} onProgress={onProgress}
              />
          )
      })}
        </>
    )
}

export default Task