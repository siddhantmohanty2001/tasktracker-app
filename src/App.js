import Header from './components/Header'
import Task from './components/Task'
import {useState,useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [change,setChange]=useState(false)
  const [tasks, setTasks]=useState([])
  //Get method
  const callPost=async ()=>{
    const res= await fetch('https://tasktracker-app-final.herokuapp.com/get')
    const data=await res.json();
    console.log(data);
    setTasks(data);
  }
  useEffect(() => {
    callPost(); 
    console.log(tasks)  
}, [change])
//Show add task
const showTask=()=>setShowAddTask(!showAddTask)
//AddTask
const addTask=(task)=>{
  setTasks([...tasks,task])
}
//delete tasks 
const deletetask= async (id)=>{
  /*setTasks(tasks.filter((tasks)=>
    tasks._id!==id
  ))*/
const res=await fetch('https://tasktracker-app-final.herokuapp.com/delete',{
  method: "DELETE",
  headers: { 
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body:JSON.stringify({_id:id})
});
const data=await res.json();
console.log(data);
setChange(!change);
}
 //Toggleremainder

 const toggleremainder=async (id,remainder)=>{
  /* setTasks(tasks.map((task)=>task._id===id?{...task,remainder:!task.remainder}:task))*/
  const res=await fetch('https://tasktracker-app-final.herokuapp.com/put',{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({_id:id,remainder:remainder})
  })
  const data=await res.json();
  console.log(data);
  setChange(!change);
  }
  return (
    <div className="container">
      <Header showAddTask={showTask} col={!showAddTask?'green':'red'} text={!showAddTask?'add':'close'}/>
      {showAddTask&&<AddTask onAdd={addTask} change={change} setChange={setChange}/>}
      {tasks.length>0?(<Task tasks={tasks} deletetask={deletetask} onToggle={toggleremainder}/>):('No Tasks to show')}
    </div>
  );
}

export default App;
