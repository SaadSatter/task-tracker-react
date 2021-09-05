//useState and useEffect are hooks from react 
import {useState, useEffect} from 'react';
import './App.css';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
import AddTask from './Component/AddTask';
//ctrl ~ for terminal
//ctrl c to stop server
//to open application windows powershell -> cd task-tracker-react -> code .
/*
USING GIT:
  Getting Started in Terminal: 
      git init
      git add .
      git commit -m "anything" 
      git remote add origin https://github.com/SaadSatter/task-tracker-react.git
      git push origin master

  Pushing changes into Git:
      Save your files
      git add .
      git commit -m "changes made"
      git push origin masters


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
  
  Interacting with CSS and HTML:
    CSS in react uses camelCase 
    classNames in HTML link to the CSS in index.css to alter appearance 
  
  Build For Production
    npm run build
    serve -s build -p 8000 //-p sets the port 
    If there is a restricted error
      Windows powershell cd to the project
      Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
      When u are done, restrict again for protection
      Set-ExecutionPolicy Restricted -Scope CurrentUser

  Using JSON server as a Mock BackEnd
    npm i json-server
    package.Json 
      add in scripts this line -> **"server": "json-server --watch db.json --port 5000"**
    npm run server
    useEffect is used to load something from backend when the page loads
    Fetch data
      const fetchTask = async () =>{
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data
    Delete Data use {method : 'Delete'}
  }
    
*/

function App() {
  const name = "brad"
  const booly = true
  //an array of objects in a state mapping 
  // {} these desfine objects 
  const [tasks, setTasks] = useState([
    // {
    //   id : 1,
    //   text : "Doctor Appt",
    //   day: "Feb 5th at 2pm",
    //   reminder: false,
    // },
    // {
    //   id : 2,
    //   text : "Walk the Dog",
    //   day: "Feb 7th at 3pm",
    //   reminder: false,
    // },
    // {
    //   id : 3,
    //   text : "Fall Asleep",
    //   day: "Mar 10th at 12pm",
    //   reminder: true,
    // }
  ]);
//This is used to fetch data from the backend at the load of the page
  useEffect(() => {
    const getTask = async() =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTask();
  }, [])//you can add a dependency array so that when a value a changes, this function runs

  //FETCH Data from Json server, backend 
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data
  }

  //FETCH a SINGLE task from Json server, backend 
  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false);

  //delete task
  const deleteTask = async (id) => {
      //console.log('delete', id);
      //filter is used to remove states from an array of states
      await fetch(`http://localhost:5000/tasks/${id}`, {method : 'DELETE'})
      setTasks(tasks.filter((task) => task.id !== id))
  };

  //toggle reminder
  const toggleReminder = async (id) =>{
    const taskToToggle = await fetchTask(id)
    const upDatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {method : 'PUT', 
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(upDatedTask) 
    } )
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? data : task))
    //console.log(id);
    //This replaces the the current task object with another object that copies (...task) the specified task
      //and replaces the reminder with the opposite of the current task
      //This process is needed because we are using states
    //setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))

  };

  //Adding Task
  const submitTask = async ({task}) =>{
    //task.id = tasks[tasks.length-1].id + 1;
    //backend will create id automatically
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
    //setTasks([...tasks, task]);
  };
  return (
      //only returns one parent element. so in this case it is div.
      <div className="container" /* remember className is case sensitive for CSS*/> 
      {/* importing component to the app */}
      <Header title = 'Hello' onClickAdd = {() => setShowAddTask(!showAddTask)} showAddTask ={showAddTask}/> {/*passing in a prop a.k.a  a param in html*/}
        {/* <h2>
           Hello {booly ?  name : 'No'}
        </h2> */}
        {showAddTask && <AddTask onSub = {submitTask}/>}
        {tasks.length === 0 ? 'You have no tasks' : 
        <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>}
    </div>
  );
}

export default App;
