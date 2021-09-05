import {useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
//ctrl ~ for terminal
//ctrl c to stop server
//to open application windows powershell -> cd task-tracker-react -> code .

function App() {
  const name = "brad"
  const booly = true
  //an array of objects in a state mapping 
  // {} these desfine objects 
  const [tasks, setTasks] = useState([
    {
      id : 1,
      text : "Doctor Appt",
      day: "Feb 5th at 2pm",
      reminder: false,
    },
    {
      id : 2,
      text : "Walk the Dog",
      day: "Feb 7th at 3pm",
      reminder: false,
    },
    {
      id : 3,
      text : "Fall Asleep",
      day: "Mar 10th at 12pm",
      reminder: true,
    }
  ]);
  const deleteTask = (id) => {
      //console.log('delete', id);
      //filter is used to remove states from an array of states
      setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
      //only returns one parent element. so in this case it is div.
      <div className="container" /* remember className is case sensitive for CSS*/> 
      {/* importing component to the app */}
      <Header title = 'Hello'/> {/*passing in a prop a.k.a  a param in html*/}
        {/* <h2>
           Hello {booly ?  name : 'No'}
        </h2> */}
        <Tasks tasks = {tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
