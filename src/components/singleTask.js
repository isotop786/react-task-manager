import React,{Fragment} from 'react'
import {FaTimes} from 'react-icons/fa'

const SingleTask = ({task, onDelete,onToggle,onProgress})=>{
    return(
        <div className={`task ${task.reminder ? 'reminder': '' }
        
            ${task.onProgress ? 'progress' : ''}

            ${task.high ? 'high' : ''}

        `} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id) } style={{color:'red',
        cursor: 'pointer'}}/></h3>
            <p>{task.day}</p><br/>
            <p><label for="">On Progress</label> <input type="radio" onChange={()=> onProgress(task.id) } name="" id=""/></p>
        </div>
    )
}

export default SingleTask;