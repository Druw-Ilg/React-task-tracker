import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
    //handle form inputs state
    const [text, setText] = useState('')
    const [dayTime, setDayTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        //prevent form to submit
        e.preventDefault()
        
        //form validation
        if (!text) {
            alert('Fill all fields to add a task');
            return
        }
        
        //if form pass validation, send inputs value to onAdd
        onAdd({text, dayTime, reminder})
        
        //clear form after sending values
        setText('')
        setDayTime('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type = 'text' placeholder='Add a Task'
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type = 'text' placeholder='Add a Day'
                value={dayTime} onChange={(e) => setDayTime(e.target.value)}/>
            </div>
            <div className='form-control-check'>
                <label>Reminder</label>
                <input type = 'checkbox' checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
