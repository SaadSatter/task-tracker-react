import {useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
//ctrl ~ for terminal
//ctrl c to stop server
//to open application windows powershell -> cd task-tracker-react -> code .
/*
Notes on REACT
  Props vs State:
    State: this is an object/array that is immutable and can only be changed through setTask.
            It is only visible to the component it is in. States should be used in the main file and pass through
            to the component as prop
    Prop: A object that can be passed through file to file as a parameter to components 
  
  Lifecycle Hooks: There are three phases to a life cycle of a component. 
                    Mounting Phase which is initializing the component
                    Updating Phase which deals with interacting with the component during its life cycle 
                    Un-mounting Phase Which deals with how the component gets deleted 
                  Hooks can interact with the component at any moment during its life cycle.
                  THEY CAN ONLY BE USED IN CLASS COMPONENTS
  
  Arrow Function: name = (param) => {function body}
                  This a short hand in writing functions 
*/

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
