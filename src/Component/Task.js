//importing icons from react-icons
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        //Dynamically changed className, using {} for writing JS in HTML
        // back ticks `` are a string formatter, it can place JS expressions into a String
          // ${} this is used with back ticks to add in variable or expression from JS
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            {/* FaTimes gives 'x' or delete icons next to the text */}
            <h3>{task.text} <FaTimes style = {{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
