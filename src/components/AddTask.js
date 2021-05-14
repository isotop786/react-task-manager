import {useState} from 'react';


const AddTask = ({addTask}) =>{

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const [high,setHigh] = useState(false);


    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Task can not be empty')
        }else{
            addTask({text,date,reminder,high})
            setText('')
            setDate('')
            setHigh(false)
            setReminder(false)
           document.getElementById('high').checked = false
           document.getElementById('reminder').checked = false
        }
      
    }

    return(
        <form 
        onSubmit={onSubmit}
        action="#" className="add-form " style={{textAlign:'center', marginTop:'20px', padding:'25px',
        border:'1px solid #eee'}}>
        <div class="form-control">
            <label >Task</label>
            <input type="text" 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />
        </div>

        <div class="form-control">
            <label >Date and Time</label>
            <input type="datetime-local"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            />
        </div>

        <div class="form-control form-control-check">
            <label >Reminder</label>
            <input id="reminder" type="checkbox" value={reminder}
            onChange={(e)=> setReminder(e.currentTarget.checked)} />
        </div>

        <div class="form-control form-control-check">
            <label >High Priority</label>
            <input id="high" type="checkbox" value={high}
            onChange={(e)=> setHigh(e.currentTarget.checked)} />
        </div>

        <div class="form-control">
            <input type="submit" value="Add Task" className="btn"/>
        </div>

        </form>
    )
}

export default AddTask;