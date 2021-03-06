import Task from './Task';
//using props can create errors in identifying any parameter 
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
          {tasks.map((task) => (<Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>))}  
        </>
    )
}     
//make sure this matches the function/component name 
export default Tasks
